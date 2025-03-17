import * as TokenType from '../TokenType/TokenType.ts'

const WHITESPACE_REGEX = /\s/
const NUMBER_START_REGEX = /[0-9-]/
const NUMBER_CONTINUE_REGEX = /[0-9.]/
const BOOLEAN_NULL_START_REGEX = /[tfn]/
const PUNCTUATION_REGEX = /[{}[\],:]/

/**
 * @enum {string}
 */
const State = {
  Initial: 'Initial',
  InObject: 'InObject',
  ExpectPropertyName: 'ExpectPropertyName',
  ExpectColon: 'ExpectColon',
  ExpectValue: 'ExpectValue',
  InArray: 'InArray',
  ExpectArrayValue: 'ExpectArrayValue',
}

export const tokenizeJson = (input: string): readonly string[] => {
  const tokens: string[] = []
  let i = 0
  let state = State.Initial
  const stack: any[] = []

  while (i < input.length) {
    const char = input[i]

    // Skip whitespace
    if (WHITESPACE_REGEX.test(char)) {
      i++
      continue
    }

    // Handle strings
    if (char === '"') {
      let value = char
      i++
      while (i < input.length && input[i] !== '"') {
        value += input[i]
        i++
      }
      if (i < input.length) {
        value += input[i]
      }

      if (state === State.ExpectPropertyName) {
        tokens.push(TokenType.JsonPropertyName)
        state = State.ExpectColon
      } else if (state === State.ExpectValue) {
        tokens.push(TokenType.JsonPropertyValueString)
        state = State.InObject
      } else if (state === State.ExpectArrayValue) {
        tokens.push(TokenType.String)
        state = State.InArray
      } else {
        tokens.push(TokenType.String)
      }

      tokens.push(value)
      i++
      continue
    }

    // Handle numbers
    if (NUMBER_START_REGEX.test(char)) {
      let value = char
      i++
      while (i < input.length && NUMBER_CONTINUE_REGEX.test(input[i])) {
        value += input[i]
        i++
      }
      tokens.push(TokenType.Numeric)
      tokens.push(value)
      if (state === State.ExpectValue) {
        state = State.InObject
      } else if (state === State.ExpectArrayValue) {
        state = State.InArray
      }
      continue
    }

    // Handle booleans and null
    if (BOOLEAN_NULL_START_REGEX.test(char)) {
      const rest = input.slice(i)
      if (rest.startsWith('true')) {
        tokens.push(TokenType.LanguageConstantBoolean)
        tokens.push('true')
        i += 4
      } else if (rest.startsWith('false')) {
        tokens.push(TokenType.LanguageConstantBoolean)
        tokens.push('false')
        i += 5
      } else if (rest.startsWith('null')) {
        tokens.push(TokenType.LanguageConstant)
        tokens.push('null')
        i += 4
      } else {
        i++
      }
      if (state === State.ExpectValue) {
        state = State.InObject
      }
      continue
    }

    // Handle punctuation
    if (PUNCTUATION_REGEX.test(char)) {
      switch (char) {
        case '{': {
          stack.push(state)
          state = State.ExpectPropertyName
          break
        }
        case '}': {
          state = stack.pop() || State.Initial
          break
        }
        case '[': {
          stack.push(state)
          state = State.ExpectArrayValue
          break
        }
        case ']': {
          state = stack.pop() || State.Initial
          break
        }
        case ':': {
          if (state === State.ExpectColon) {
            state = State.ExpectValue
          }
          break
        }
        case ',': {
          if (state === State.InObject) {
            state = State.ExpectPropertyName
          } else if (state === State.InArray) {
            state = State.ExpectArrayValue
          }
          break
        }
        // No default
      }
      tokens.push(TokenType.Punctuation)
      tokens.push(char)
      i++
      continue
    }

    // Skip unknown characters
    i++
  }

  if (state === State.ExpectValue) {
    state = State.InObject
  } else if (state === State.ExpectArrayValue) {
    state = State.InArray
  }

  return tokens
}
