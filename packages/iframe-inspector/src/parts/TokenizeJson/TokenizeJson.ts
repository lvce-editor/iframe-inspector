import type { Token } from '../Token/Token.ts'
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
const RE_ANYTHING = /^.+/s
const RE_NUMERIC_INTEGER = /^-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?\b/
const RE_NUMERIC_DECIMAL = /^-\.\d+(?:[eE][+-]?\d+)?\b/
const RE_TEXT = /^[^\s{}[\]]+/
const RE_STRING_ESCAPE = /^\\.?/
const RE_WORD = /^\w+/
const RE_ANYTHING_UNTIL_END = /^.+/s

const getMatch = (text: string, regex: RegExp): string | undefined => {
  const match = text.match(regex)
  return match?.[0]
}

const getNumeric = (part: string): string | undefined => {
  return getMatch(part, RE_NUMERIC_INTEGER) ?? getMatch(part, RE_NUMERIC_DECIMAL)
}

interface TokenResult {
  readonly nextState: number
  readonly stackPop?: boolean
  readonly stackPush?: number
  readonly text: string
  readonly token: number
}

const getTokenTopLevelContent = (part: string): TokenResult => {
  const whitespace = getMatch(part, RE_WHITESPACE)
  if (whitespace) {
    return {
      nextState: State.TopLevelContent,
      text: whitespace,
      token: TokenType.Whitespace,
    }
  }

  const curlyOpen = getMatch(part, RE_CURLY_OPEN)
  if (curlyOpen) {
    return {
      nextState: State.AfterCurlyOpen,
      stackPush: State.TopLevelContent,
      text: curlyOpen,
      token: TokenType.Punctuation,
    }
  }

  const squareOpen = getMatch(part, RE_SQUARE_OPEN)
  if (squareOpen) {
    return {
      nextState: State.TopLevelContent,
      stackPush: State.TopLevelContent,
      text: squareOpen,
      token: TokenType.Punctuation,
    }
  }

  const squareClose = getMatch(part, RE_SQUARE_CLOSE)
  if (squareClose) {
    return {
      nextState: State.TopLevelContent,
      stackPop: true,
      text: squareClose,
      token: TokenType.Punctuation,
    }
  }

  const comma = getMatch(part, RE_COMMA)
  if (comma) {
    return {
      nextState: State.TopLevelContent,
      text: comma,
      token: TokenType.Punctuation,
    }
  }

  const numeric = getNumeric(part)
  if (numeric) {
    return {
      nextState: State.TopLevelContent,
      text: numeric,
      token: TokenType.Numeric,
    }
  }

  const languageConstant = getMatch(part, RE_LANGUAGE_CONSTANT)
  if (languageConstant) {
    return {
      nextState: State.TopLevelContent,
      text: languageConstant,
      token: TokenType.LanguageConstant,
    }
  }

  const doubleQuote = getMatch(part, RE_DOUBLE_QUOTE)
  if (doubleQuote) {
    return {
      nextState: State.InsideString,
      stackPush: State.TopLevelContent,
      text: doubleQuote,
      token: TokenType.Punctuation,
    }
  }

  const curlyClose = getMatch(part, RE_CURLY_CLOSE)
  if (curlyClose) {
    return {
      nextState: State.TopLevelContent,
      stackPop: true,
      text: curlyClose,
      token: TokenType.CurlyClose,
    }
  }

  const anything = getMatch(part, RE_ANYTHING)
  if (anything) {
    return {
      nextState: State.TopLevelContent,
      text: anything,
      token: TokenType.Text,
    }
  }

  throw new Error('no')
}

const getTokenAfterCurlyOpen = (part: string): TokenResult => {
  const whitespace = getMatch(part, RE_WHITESPACE)
  if (whitespace) {
    return {
      nextState: State.AfterCurlyOpen,
      text: whitespace,
      token: TokenType.Whitespace,
    }
  }

  const doubleQuote = getMatch(part, RE_DOUBLE_QUOTE)
  if (doubleQuote) {
    return {
      nextState: State.InsidePropertyNameString,
      stackPush: State.AfterPropertyName,
      text: doubleQuote,
      token: TokenType.Punctuation,
    }
  }

  const curlyClose = getMatch(part, RE_CURLY_CLOSE)
  if (curlyClose) {
    return {
      nextState: State.AfterCurlyOpen,
      stackPop: true,
      text: curlyClose,
      token: TokenType.Punctuation,
    }
  }

  const word = getMatch(part, RE_WORD)
  if (word) {
    return {
      nextState: State.AfterPropertyName,
      text: word,
      token: TokenType.Text,
    }
  }

  const anything = getMatch(part, RE_ANYTHING)
  if (anything) {
    return {
      nextState: State.AfterCurlyOpen,
      text: anything,
      token: TokenType.Text,
    }
  }

  throw new Error('no')
}

const getTokenInsidePropertyNameString = (part: string): TokenResult => {
  const stringContent = getMatch(part, RE_STRING_DOUBLE_QUOTE_CONTENT)
  if (stringContent) {
    return {
      nextState: State.InsidePropertyNameString,
      text: stringContent,
      token: TokenType.JsonPropertyName,
    }
  }

  const doubleQuote = getMatch(part, RE_DOUBLE_QUOTE)
  if (doubleQuote) {
    return {
      nextState: State.InsidePropertyNameString,
      stackPop: true,
      text: doubleQuote,
      token: TokenType.Punctuation,
    }
  }

  const escaped = getMatch(part, RE_STRING_ESCAPE)
  if (escaped) {
    return {
      nextState: State.InsidePropertyNameString,
      text: escaped,
      token: TokenType.JsonPropertyName,
    }
  }

  throw new Error('no')
}

const getTokenInsideString = (part: string): TokenResult => {
  const stringContent = getMatch(part, RE_STRING_DOUBLE_QUOTE_CONTENT)
  if (stringContent) {
    return {
      nextState: State.InsideString,
      text: stringContent,
      token: TokenType.JsonPropertyValueString,
    }
  }

  const doubleQuote = getMatch(part, RE_DOUBLE_QUOTE)
  if (doubleQuote) {
    return {
      nextState: State.InsideString,
      stackPop: true,
      text: doubleQuote,
      token: TokenType.Punctuation,
    }
  }

  const escaped = getMatch(part, RE_STRING_ESCAPE)
  if (escaped) {
    return {
      nextState: State.InsideString,
      text: escaped,
      token: TokenType.String,
    }
  }

  throw new Error('no')
}

const getTokenAfterPropertyName = (part: string): TokenResult => {
  const colon = getMatch(part, RE_COLON)
  if (colon) {
    return {
      nextState: State.AfterPropertyNameAfterColon,
      text: colon,
      token: TokenType.Punctuation,
    }
  }

  const whitespace = getMatch(part, RE_WHITESPACE)
  if (whitespace) {
    return {
      nextState: State.AfterPropertyName,
      text: whitespace,
      token: TokenType.Whitespace,
    }
  }

  const anything = getMatch(part, RE_ANYTHING)
  if (anything) {
    return {
      nextState: State.AfterCurlyOpen,
      text: anything,
      token: TokenType.Text,
    }
  }

  throw new Error('no')
}

const getTokenAfterPropertyNameAfterColon = (part: string): TokenResult => {
  const whitespace = getMatch(part, RE_WHITESPACE)
  if (whitespace) {
    return {
      nextState: State.AfterPropertyNameAfterColon,
      text: whitespace,
      token: TokenType.Whitespace,
    }
  }

  const doubleQuote = getMatch(part, RE_DOUBLE_QUOTE)
  if (doubleQuote) {
    return {
      nextState: State.InsideString,
      stackPush: State.AfterPropertyValue,
      text: doubleQuote,
      token: TokenType.Punctuation,
    }
  }

  const languageConstant = getMatch(part, RE_LANGUAGE_CONSTANT)
  if (languageConstant) {
    return {
      nextState: State.AfterPropertyValue,
      text: languageConstant,
      token: TokenType.LanguageConstant,
    }
  }

  const numeric = getNumeric(part)
  if (numeric) {
    return {
      nextState: State.AfterPropertyValue,
      text: numeric,
      token: TokenType.Numeric,
    }
  }

  const text = getMatch(part, RE_TEXT)
  if (text) {
    return {
      nextState: State.AfterCurlyOpen,
      text,
      token: TokenType.Text,
    }
  }

  const curlyOpen = getMatch(part, RE_CURLY_OPEN)
  if (curlyOpen) {
    return {
      nextState: State.AfterCurlyOpen,
      stackPush: State.AfterPropertyValue,
      text: curlyOpen,
      token: TokenType.Punctuation,
    }
  }

  const squareOpen = getMatch(part, RE_SQUARE_OPEN)
  if (squareOpen) {
    return {
      nextState: State.TopLevelContent,
      stackPush: State.AfterPropertyValue,
      text: squareOpen,
      token: TokenType.Punctuation,
    }
  }

  const curlyClose = getMatch(part, RE_CURLY_CLOSE)
  if (curlyClose) {
    return {
      nextState: State.TopLevelContent,
      stackPop: true,
      text: curlyClose,
      token: TokenType.Punctuation,
    }
  }

  throw new Error('no')
}

const getTokenAfterPropertyValue = (part: string): TokenResult => {
  const curlyClose = getMatch(part, RE_CURLY_CLOSE)
  if (curlyClose) {
    return {
      nextState: State.TopLevelContent,
      stackPop: true,
      text: curlyClose,
      token: TokenType.Punctuation,
    }
  }

  const whitespace = getMatch(part, RE_WHITESPACE)
  if (whitespace) {
    return {
      nextState: State.AfterPropertyValue,
      text: whitespace,
      token: TokenType.Whitespace,
    }
  }

  const comma = getMatch(part, RE_COMMA)
  if (comma) {
    return {
      nextState: State.AfterCurlyOpen,
      text: comma,
      token: TokenType.Punctuation,
    }
  }

  const colon = getMatch(part, RE_COLON)
  if (colon) {
    return {
      nextState: State.AfterPropertyNameAfterColon,
      text: colon,
      token: TokenType.Punctuation,
    }
  }

  const anything = getMatch(part, RE_ANYTHING)
  if (anything) {
    return {
      nextState: State.AfterCurlyOpen,
      text: anything,
      token: TokenType.Text,
    }
  }

  throw new Error('no')
}

const getTokenInsideLineComment = (part: string): TokenResult => {
  const anything = getMatch(part, RE_ANYTHING)
  if (anything) {
    return {
      nextState: State.TopLevelContent,
      text: anything,
      token: TokenType.Comment,
    }
  }

  throw new Error('no')
}

const getTokenInsideBlockComment = (part: string): TokenResult => {
  const anythingUntilEnd = getMatch(part, RE_ANYTHING_UNTIL_END)
  if (anythingUntilEnd) {
    return {
      nextState: State.InsideBlockComment,
      text: anythingUntilEnd,
      token: TokenType.Comment,
    }
  }

  throw new Error('no')
}

const getToken = (state: number, part: string): TokenResult => {
  switch (state) {
    case State.AfterCurlyOpen:
      return getTokenAfterCurlyOpen(part)
    case State.AfterPropertyName:
      return getTokenAfterPropertyName(part)
    case State.AfterPropertyNameAfterColon:
      return getTokenAfterPropertyNameAfterColon(part)
    case State.AfterPropertyValue:
      return getTokenAfterPropertyValue(part)
    case State.InsideBlockComment:
      return getTokenInsideBlockComment(part)
    case State.InsideLineComment:
      return getTokenInsideLineComment(part)
    case State.InsidePropertyNameString:
      return getTokenInsidePropertyNameString(part)
    case State.InsideString:
      return getTokenInsideString(part)
    case State.TopLevelContent:
      return getTokenTopLevelContent(part)
    default:
      throw new Error('no')
  }
}

export const tokenizeJson = (input: string): readonly Token[] => {
  let index = 0
  let state = State.TopLevelContent
  const tokens: Token[] = []
  const stack: number[] = []

  while (index < input.length) {
    const part = input.slice(index)
    const token = getToken(state, part)
    const { nextState, stackPop, stackPush, text, token: tokenType } = token
    if (stackPop) {
      const previousState = stack.pop()
      if (previousState === undefined) {
        throw new Error('imbalanced json')
      }
      state = previousState
    } else {
      state = nextState
    }

    if (stackPush) {
      stack.push(stackPush)
    }

    index += text.length
    tokens.push({ tokenText: text, tokenType })
  }
  return tokens
}
