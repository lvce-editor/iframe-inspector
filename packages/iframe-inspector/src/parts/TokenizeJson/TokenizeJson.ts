import * as TokenType from '../TokenType/TokenType.ts'

const WHITESPACE_REGEX = /\s/
const NUMBER_START_REGEX = /[0-9-]/
const NUMBER_CONTINUE_REGEX = /[0-9.]/
const BOOLEAN_NULL_START_REGEX = /[tfn]/
const PUNCTUATION_REGEX = /[{}[\],:]/

export const tokenizeJson = (input: string): readonly string[] => {
  const tokens: string[] = []
  let i = 0

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
      tokens.push(TokenType.JsonPropertyValueString)
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
      continue
    }

    // Handle punctuation
    if (PUNCTUATION_REGEX.test(char)) {
      tokens.push(TokenType.Punctuation)
      tokens.push(char)
      i++
      continue
    }

    // Skip unknown characters
    i++
  }

  return tokens
}
