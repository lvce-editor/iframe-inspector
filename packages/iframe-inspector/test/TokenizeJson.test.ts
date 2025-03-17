import { test, expect } from '@jest/globals'
import { tokenizeJson } from '../src/parts/TokenizeJson/TokenizeJson.ts'
import * as TokenType from '../src/parts/TokenType/TokenType.ts'

test('empty object', () => {
  const tokens = tokenizeJson('{}')
  expect(tokens).toEqual([TokenType.Punctuation, '{', TokenType.Punctuation, '}'])
})

test.skip('simple object with string value', () => {
  const tokens = tokenizeJson('{"key": "value"}')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyName,
    'key',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ':',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyValueString,
    'value',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    '}',
  ])
})

test.skip('object with multiple properties', () => {
  const tokens = tokenizeJson('{"key1": "value1", "key2": "value2"}')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyName,
    'key1',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ':',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyValueString,
    'value1',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ',',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyName,
    'key2',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ':',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyValueString,
    'value2',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    '}',
  ])
})

test.skip('object with numeric values', () => {
  const tokens = tokenizeJson('{"number": 42, "float": 3.14}')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyName,
    'number',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ':',
    TokenType.Numeric,
    '42',
    TokenType.Punctuation,
    ',',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyName,
    'float',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ':',
    TokenType.Numeric,
    '3.14',
    TokenType.Punctuation,
    '}',
  ])
})

test.skip('object with boolean and null values', () => {
  const tokens = tokenizeJson('{"bool": true, "null": null}')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyName,
    'bool',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ':',
    TokenType.LanguageConstant,
    'true',
    TokenType.Punctuation,
    ',',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyName,
    'null',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ':',
    TokenType.LanguageConstant,
    'null',
    TokenType.Punctuation,
    '}',
  ])
})

test.skip('nested objects', () => {
  const tokens = tokenizeJson('{"outer": {"inner": "value"}}')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyName,
    'outer',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ':',
    TokenType.Punctuation,
    '{',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyName,
    'inner',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ':',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyValueString,
    'value',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    '}',
    TokenType.Punctuation,
    '}',
  ])
})

test.skip('array with mixed values', () => {
  const tokens = tokenizeJson('["string", 42, true, null, {"key": "value"}]')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '[',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyValueString,
    'string',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ',',
    TokenType.Numeric,
    '42',
    TokenType.Punctuation,
    ',',
    TokenType.LanguageConstant,
    'true',
    TokenType.Punctuation,
    ',',
    TokenType.LanguageConstant,
    'null',
    TokenType.Punctuation,
    ',',
    TokenType.Punctuation,
    '{',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyName,
    'key',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ':',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyValueString,
    'value',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    '}',
    TokenType.Punctuation,
    ']',
  ])
})

test.skip('handles escaped characters in strings', () => {
  const tokens = tokenizeJson(String.raw`{"escaped": "\"quotes\" and \n newline"}`)
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyName,
    'escaped',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ':',
    TokenType.Punctuation,
    '"',
    TokenType.String,
    '\\',
    TokenType.JsonPropertyValueString,
    String.raw`"quotes\" and \n newline`,
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    '}',
  ])
})

test.skip('handles line comments', () => {
  const tokens = tokenizeJson('{\n  // comment\n  "key": "value"\n}')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.Whitespace,
    '\n  ',
    TokenType.Comment,
    '// comment',
    TokenType.Whitespace,
    '\n  ',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyName,
    'key',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ':',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyValueString,
    'value',
    TokenType.Punctuation,
    '"',
    TokenType.Whitespace,
    '\n',
    TokenType.Punctuation,
    '}',
  ])
})

test.skip('handles block comments', () => {
  const tokens = tokenizeJson('{\n  /* block\n     comment */\n  "key": "value"\n}')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.Whitespace,
    '\n  ',
    TokenType.Comment,
    '/* block\n     comment */',
    TokenType.Whitespace,
    '\n  ',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyName,
    'key',
    TokenType.Punctuation,
    '"',
    TokenType.Punctuation,
    ':',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyValueString,
    'value',
    TokenType.Punctuation,
    '"',
    TokenType.Whitespace,
    '\n',
    TokenType.Punctuation,
    '}',
  ])
})

test('handles whitespace', () => {
  const tokens = tokenizeJson('{  "key"  :  "value"  }')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '{',
    TokenType.Whitespace,
    '  ',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyName,
    'key',
    TokenType.Punctuation,
    '"',
    TokenType.Whitespace,
    '  ',
    TokenType.Punctuation,
    ':',
    TokenType.Whitespace,
    '  ',
    TokenType.Punctuation,
    '"',
    TokenType.JsonPropertyValueString,
    'value',
    TokenType.Punctuation,
    '"',
    TokenType.Whitespace,
    '  ',
    TokenType.Punctuation,
    '}',
  ])
})

test('handles empty array', () => {
  const tokens = tokenizeJson('[]')
  expect(tokens).toEqual([TokenType.Punctuation, '[', TokenType.Punctuation, ']'])
})

test.skip('handles nested arrays', () => {
  const tokens = tokenizeJson('[[1, 2], [3, 4]]')
  expect(tokens).toEqual([
    TokenType.Punctuation,
    '[',
    TokenType.Punctuation,
    '[',
    TokenType.Numeric,
    '1',
    TokenType.Punctuation,
    ',',
    TokenType.Numeric,
    '2',
    TokenType.Punctuation,
    ']',
    TokenType.Punctuation,
    ',',
    TokenType.Punctuation,
    '[',
    TokenType.Numeric,
    '3',
    TokenType.Punctuation,
    ',',
    TokenType.Numeric,
    '4',
    TokenType.Punctuation,
    ']',
    TokenType.Punctuation,
    ']',
  ])
})
