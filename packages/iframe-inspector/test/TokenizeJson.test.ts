import { test, expect } from '@jest/globals'
import * as TokenizeJson from '../src/parts/TokenizeJson/TokenizeJson.ts'
import * as TokenType from '../src/parts/TokenType/TokenType.ts'

test('empty object', () => {
  const tokens = TokenizeJson.tokenizeJson('{}')
  expect(tokens).toEqual([TokenType.Punctuation, '{', TokenType.Punctuation, '}'])
})

test('simple object with string property', () => {
  const tokens = TokenizeJson.tokenizeJson('{"name":"value"}')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.JsonPropertyName,
    '"name"',
    TokenType.Punctuation,
    ':',
    TokenType.JsonPropertyValueString,
    '"value"',
    TokenType.Punctuation,
    '}',
  ])
})

test('object with multiple properties', () => {
  const tokens = TokenizeJson.tokenizeJson('{"name":"value","age":42}')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.JsonPropertyName,
    '"name"',
    TokenType.Punctuation,
    ':',
    TokenType.JsonPropertyValueString,
    '"value"',
    TokenType.Punctuation,
    ',',
    TokenType.JsonPropertyName,
    '"age"',
    TokenType.Punctuation,
    ':',
    TokenType.Numeric,
    '42',
    TokenType.Punctuation,
    '}',
  ])
})

test('object with boolean and null values', () => {
  const tokens = TokenizeJson.tokenizeJson('{"active":true,"data":null}')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.JsonPropertyName,
    '"active"',
    TokenType.Punctuation,
    ':',
    TokenType.LanguageConstantBoolean,
    'true',
    TokenType.Punctuation,
    ',',
    TokenType.JsonPropertyName,
    '"data"',
    TokenType.Punctuation,
    ':',
    TokenType.LanguageConstant,
    'null',
    TokenType.Punctuation,
    '}',
  ])
})

test('nested objects', () => {
  const tokens = TokenizeJson.tokenizeJson('{"user":{"name":"john"}}')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.JsonPropertyName,
    '"user"',
    TokenType.Punctuation,
    ':',
    TokenType.Punctuation,
    '{',
    TokenType.JsonPropertyName,
    '"name"',
    TokenType.Punctuation,
    ':',
    TokenType.JsonPropertyValueString,
    '"john"',
    TokenType.Punctuation,
    '}',
    TokenType.Punctuation,
    '}',
  ])
})

test('array with mixed values', () => {
  const tokens = TokenizeJson.tokenizeJson('{"items":[1,"two",true,null]}')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.JsonPropertyName,
    '"items"',
    TokenType.Punctuation,
    ':',
    TokenType.Punctuation,
    '[',
    TokenType.Numeric,
    '1',
    TokenType.Punctuation,
    ',',
    TokenType.JsonPropertyName,
    '"two"',
    TokenType.Punctuation,
    ',',
    TokenType.LanguageConstantBoolean,
    'true',
    TokenType.Punctuation,
    ',',
    TokenType.LanguageConstant,
    'null',
    TokenType.Punctuation,
    ']',
    TokenType.Punctuation,
    '}',
  ])
})

test('handles whitespace', () => {
  const tokens = TokenizeJson.tokenizeJson('{ "name" : "value" }')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.JsonPropertyName,
    '"name"',
    TokenType.Punctuation,
    ':',
    TokenType.JsonPropertyValueString,
    '"value"',
    TokenType.Punctuation,
    '}',
  ])
})
