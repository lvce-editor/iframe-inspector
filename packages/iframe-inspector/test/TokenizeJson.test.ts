import { expect, test } from '@jest/globals'
import * as TokenizeJson from '../src/parts/TokenizeJson/TokenizeJson.ts'
import * as TokenType from '../src/parts/TokenType/TokenType.ts'

test('tokenizeJson - empty object', () => {
  expect(TokenizeJson.tokenizeJson('{}')).toEqual([TokenType.Punctuation, '{', TokenType.Punctuation, '}'])
})

test('tokenizeJson - string value', () => {
  expect(TokenizeJson.tokenizeJson('{"name":"test"}')).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.JsonPropertyValueString,
    '"name"',
    TokenType.Punctuation,
    ':',
    TokenType.JsonPropertyValueString,
    '"test"',
    TokenType.Punctuation,
    '}',
  ])
})

test('tokenizeJson - number value', () => {
  expect(TokenizeJson.tokenizeJson('{"age":42}')).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.JsonPropertyValueString,
    '"age"',
    TokenType.Punctuation,
    ':',
    TokenType.Numeric,
    '42',
    TokenType.Punctuation,
    '}',
  ])
})

test('tokenizeJson - boolean and null values', () => {
  expect(TokenizeJson.tokenizeJson('{"active":true,"data":null,"hidden":false}')).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.JsonPropertyValueString,
    '"active"',
    TokenType.Punctuation,
    ':',
    TokenType.LanguageConstantBoolean,
    'true',
    TokenType.Punctuation,
    ',',
    TokenType.JsonPropertyValueString,
    '"data"',
    TokenType.Punctuation,
    ':',
    TokenType.LanguageConstant,
    'null',
    TokenType.Punctuation,
    ',',
    TokenType.JsonPropertyValueString,
    '"hidden"',
    TokenType.Punctuation,
    ':',
    TokenType.LanguageConstantBoolean,
    'false',
    TokenType.Punctuation,
    '}',
  ])
})

test('tokenizeJson - array value', () => {
  expect(TokenizeJson.tokenizeJson('{"items":[1,2,3]}')).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.JsonPropertyValueString,
    '"items"',
    TokenType.Punctuation,
    ':',
    TokenType.Punctuation,
    '[',
    TokenType.Numeric,
    '1',
    TokenType.Punctuation,
    ',',
    TokenType.Numeric,
    '2',
    TokenType.Punctuation,
    ',',
    TokenType.Numeric,
    '3',
    TokenType.Punctuation,
    ']',
    TokenType.Punctuation,
    '}',
  ])
})

test('tokenizeJson - nested object', () => {
  expect(TokenizeJson.tokenizeJson('{"user":{"name":"test"}}')).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.JsonPropertyValueString,
    '"user"',
    TokenType.Punctuation,
    ':',
    TokenType.Punctuation,
    '{',
    TokenType.JsonPropertyValueString,
    '"name"',
    TokenType.Punctuation,
    ':',
    TokenType.JsonPropertyValueString,
    '"test"',
    TokenType.Punctuation,
    '}',
    TokenType.Punctuation,
    '}',
  ])
})
