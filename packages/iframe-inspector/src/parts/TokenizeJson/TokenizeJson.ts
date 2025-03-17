import * as State from '../TokenizeJsonState/TokenizeJsonState.ts'
import * as TokenType from '../TokenType/TokenType.ts'

const RE_WHITESPACE = /^\s+/
const RE_CURLY_OPEN = /^\{/
const RE_CURLY_CLOSE = /^\}/
const RE_COLON = /^:/
const RE_COMMA = /^,/
const RE_DOUBLE_QUOTE = /^"/
const RE_STRING_DOUBLE_QUOTE_CONTENT = /^[^"\\]+/
const RE_LANGUAGE_CONSTANT = /^(?:true|false|null)/
const RE_SQUARE_OPEN = /^\[/
const RE_SQUARE_CLOSE = /^]/
const RE_LINE_COMMENT = /^\/\/.*/
const RE_ANYTHING = /^.+/s
const RE_NUMERIC = /^((0(x|X)[0-9a-fA-F]*)|(-?([0-9]+\.?[0-9]*)|(\.[0-9]+))((e|E)(\+|-)?[0-9]+)?)\b/
const RE_TEXT = /^[^\s{}[\]]+/
const RE_STRING_ESCAPE = /^\\.?/
const RE_WORD = /^\w+/
const RE_BLOCK_COMMENT_START = /^\/\*/
const RE_BLOCK_COMMENT_CONTENT = /^.+?(?=\*\/)/
const RE_BLOCK_COMMENT_END = /^\*\//
const RE_ANYTHING_UNTIL_END = /^.+/s

export const tokenizeJson = (input: string): readonly string[] => {
  let next
  let index = 0
  let token
  let state = State.TopLevelContent
  let __r = 0
  const tokens: string[] = []
  const stack: number[] = []

  while (index < input.length) {
    if (__r++ > 100_000_000_000) {
      throw new Error('endless loop')
    }
    const part = input.slice(index)
    switch (state) {
      case State.TopLevelContent:
        if ((next = part.match(RE_CURLY_OPEN))) {
          token = TokenType.Punctuation
          state = State.AfterCurlyOpen
          stack.push(State.TopLevelContent)
        } else if ((next = part.match(RE_SQUARE_OPEN))) {
          token = TokenType.Punctuation
          state = State.TopLevelContent
          stack.push(State.TopLevelContent)
        } else if ((next = part.match(RE_WHITESPACE))) {
          token = TokenType.Whitespace
          state = State.TopLevelContent
        } else if ((next = part.match(RE_SQUARE_CLOSE))) {
          token = TokenType.Punctuation
          state = stack.pop() || State.TopLevelContent
        } else if ((next = part.match(RE_COMMA))) {
          token = TokenType.Punctuation
          state = State.TopLevelContent
        } else if ((next = part.match(RE_NUMERIC))) {
          token = TokenType.Numeric
          state = State.TopLevelContent
        } else if ((next = part.match(RE_LANGUAGE_CONSTANT))) {
          token = TokenType.LanguageConstant
          state = State.TopLevelContent
        } else if ((next = part.match(RE_DOUBLE_QUOTE))) {
          token = TokenType.Punctuation
          state = State.InsideString
          stack.push(State.TopLevelContent)
        } else if ((next = part.match(RE_LINE_COMMENT))) {
          token = TokenType.Comment
          state = State.InsideLineComment
        } else if ((next = part.match(RE_CURLY_CLOSE))) {
          token = TokenType.CurlyClose
          state = stack.pop() || State.TopLevelContent
        } else if ((next = part.match(RE_BLOCK_COMMENT_START))) {
          token = TokenType.Comment
          state = State.InsideBlockComment
          stack.push(State.TopLevelContent)
        } else if ((next = part.match(RE_ANYTHING))) {
          token = TokenType.Text
          state = State.TopLevelContent
        } else {
          throw new Error('no')
        }
        break
      case State.AfterCurlyOpen:
        if ((next = part.match(RE_WHITESPACE))) {
          token = TokenType.Whitespace
          state = State.AfterCurlyOpen
        } else if ((next = part.match(RE_DOUBLE_QUOTE))) {
          token = TokenType.Punctuation
          state = State.InsidePropertyNameString
          stack.push(State.AfterPropertyName)
        } else if ((next = part.match(RE_CURLY_CLOSE))) {
          token = TokenType.Punctuation
          state = stack.pop() || State.TopLevelContent
          if (!state) {
            throw new Error('imbalanced json')
          }
        } else if ((next = part.match(RE_LINE_COMMENT))) {
          token = TokenType.Comment
          state = State.AfterCurlyOpen
        } else if ((next = part.match(RE_WORD))) {
          token = TokenType.Text
          state = State.AfterPropertyName
        } else if ((next = part.match(RE_BLOCK_COMMENT_START))) {
          token = TokenType.Comment
          state = State.InsideBlockComment
          stack.push(State.AfterCurlyOpen)
        } else if ((next = part.match(RE_ANYTHING))) {
          token = TokenType.Text
          state = State.AfterCurlyOpen
        } else {
          throw new Error('no')
        }
        break
      case State.InsidePropertyNameString:
        if ((next = part.match(RE_STRING_DOUBLE_QUOTE_CONTENT))) {
          token = TokenType.JsonPropertyName
          state = State.InsidePropertyNameString
        } else if ((next = part.match(RE_DOUBLE_QUOTE))) {
          token = TokenType.Punctuation
          state = stack.pop() || State.TopLevelContent
        } else if ((next = part.match(RE_STRING_ESCAPE))) {
          token = TokenType.JsonPropertyName
          state = State.InsidePropertyNameString
        } else {
          throw new Error('no')
        }
        break
      case State.InsideString:
        if ((next = part.match(RE_STRING_DOUBLE_QUOTE_CONTENT))) {
          token = TokenType.JsonPropertyValueString
          state = State.InsideString
        } else if ((next = part.match(RE_DOUBLE_QUOTE))) {
          token = TokenType.Punctuation
          state = stack.pop() || State.TopLevelContent
        } else if ((next = part.match(RE_STRING_ESCAPE))) {
          token = TokenType.String
          state = State.InsideString
        } else {
          throw new Error('no')
        }
        break
      case State.AfterPropertyName:
        if ((next = part.match(RE_COLON))) {
          token = TokenType.Punctuation
          state = State.AfterPropertyNameAfterColon
        } else if ((next = part.match(RE_WHITESPACE))) {
          token = TokenType.Whitespace
          state = State.AfterPropertyName
        } else if ((next = part.match(RE_ANYTHING))) {
          token = TokenType.Text
          state = State.AfterCurlyOpen
        } else {
          throw new Error('no')
        }
        break
      case State.AfterPropertyNameAfterColon:
        if ((next = part.match(RE_WHITESPACE))) {
          token = TokenType.Whitespace
          state = State.AfterPropertyNameAfterColon
        } else if ((next = part.match(RE_DOUBLE_QUOTE))) {
          token = TokenType.Punctuation
          state = State.InsideString
          stack.push(State.AfterPropertyValue)
        } else if ((next = part.match(RE_LANGUAGE_CONSTANT))) {
          token = TokenType.LanguageConstant
          state = State.AfterPropertyValue
        } else if ((next = part.match(RE_NUMERIC))) {
          token = TokenType.Numeric
          state = State.AfterPropertyValue
        } else if ((next = part.match(RE_TEXT))) {
          token = TokenType.Text
          state = State.AfterCurlyOpen
        } else if ((next = part.match(RE_CURLY_OPEN))) {
          token = TokenType.Punctuation
          state = State.AfterCurlyOpen
          stack.push(State.AfterPropertyValue)
        } else if ((next = part.match(RE_SQUARE_OPEN))) {
          token = TokenType.Punctuation
          state = State.TopLevelContent
          stack.push(State.AfterPropertyValue)
        } else if ((next = part.match(RE_CURLY_CLOSE))) {
          token = TokenType.Punctuation
          state = stack.pop() || State.TopLevelContent
        } else {
          throw new Error('no')
        }
        break
      case State.AfterPropertyValue:
        if ((next = part.match(RE_CURLY_CLOSE))) {
          token = TokenType.Punctuation
          state = stack.pop() || State.TopLevelContent
          if (!state) {
            throw new Error('inbalanced json')
          }
        } else if ((next = part.match(RE_WHITESPACE))) {
          token = TokenType.Whitespace
          state = State.AfterPropertyValue
        } else if ((next = part.match(RE_COMMA))) {
          token = TokenType.Punctuation
          state = State.AfterCurlyOpen
        } else if ((next = part.match(RE_LINE_COMMENT))) {
          token = TokenType.Comment
          state = State.AfterPropertyValue
        } else if ((next = part.match(RE_BLOCK_COMMENT_START))) {
          token = TokenType.Comment
          state = State.InsideBlockComment
          stack.push(State.AfterPropertyValue)
        } else if ((next = part.match(RE_COLON))) {
          token = TokenType.Punctuation
          state = State.AfterPropertyNameAfterColon
        } else if ((next = part.match(RE_ANYTHING))) {
          token = TokenType.Text
          state = State.AfterCurlyOpen
        } else {
          throw new Error('no')
        }
        break
      case State.InsideLineComment:
        if ((next = part.match(RE_ANYTHING))) {
          token = TokenType.Comment
          state = State.TopLevelContent
        } else {
          throw new Error('no')
        }
        break
      case State.InsideBlockComment:
        if ((next = part.match(RE_BLOCK_COMMENT_END))) {
          token = TokenType.Comment
          state = stack.pop() || State.TopLevelContent
        } else if ((next = part.match(RE_BLOCK_COMMENT_CONTENT))) {
          token = TokenType.Comment
          state = State.InsideBlockComment
        } else if ((next = part.match(RE_ANYTHING_UNTIL_END))) {
          token = TokenType.Comment
          state = State.InsideBlockComment
        } else {
          throw new Error('no')
        }
        break
      default:
        throw new Error('no')
    }

    const currentTokenText = next[0]
    const currentTokenLength = currentTokenText.length
    index += currentTokenLength
    tokens.push(token, currentTokenText)
  }
  if (state === State.InsideLineComment) {
    state = State.TopLevelContent
  }
  if (state === State.AfterPropertyValue) {
    state = State.AfterCurlyOpen
  }
  return tokens
}
