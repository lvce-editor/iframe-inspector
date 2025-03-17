import { expect, test } from '@jest/globals'
import { tokenizeJson } from '../src/parts/TokenizeJson/TokenizeJson.ts'
import * as TokenType from '../src/parts/TokenType/TokenType.ts'

test('tokenize empty object', () => {
  const tokens = tokenizeJson('{}')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})

test('tokenize object with string property', () => {
  const tokens = tokenizeJson('{"name": "value"}')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'name' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: 'value' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})

test('tokenize object with boolean property', () => {
  const tokens = tokenizeJson('{"active": true}')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'active' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.LanguageConstant, tokenText: 'true' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})

test('tokenize object with numeric property', () => {
  const tokens = tokenizeJson('{"count": 42}')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'count' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Numeric, tokenText: '42' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})

test('tokenize object with multiple properties', () => {
  const tokens = tokenizeJson('{"name": "value", "count": 42}')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'name' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: 'value' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'count' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Numeric, tokenText: '42' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})

test('tokenize array', () => {
  const tokens = tokenizeJson('["item1", "item2"]')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '[' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: 'item1' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: 'item2' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ']' },
  ])
})

test('tokenize nested object', () => {
  const tokens = tokenizeJson('{"nested": {"key": "value"}}')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'nested' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'key' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: 'value' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})

test('tokenize object with boolean and null values', () => {
  const tokens = tokenizeJson('{"bool": true, "null": null}')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'bool' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.LanguageConstant, tokenText: 'true' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'null' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.LanguageConstant, tokenText: 'null' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})

test('tokenize array with mixed values', () => {
  const tokens = tokenizeJson('["string", 42, true, null, {"key": "value"}]')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '[' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: 'string' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Numeric, tokenText: '42' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.LanguageConstant, tokenText: 'true' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.LanguageConstant, tokenText: 'null' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'key' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: 'value' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
    { tokenType: TokenType.Punctuation, tokenText: ']' },
  ])
})

test('handles escaped characters in strings', () => {
  const tokens = tokenizeJson(String.raw`{"escaped": "\"quotes\" and \n newline"}`)
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'escaped' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.String, tokenText: String.raw`\"` },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: 'quotes' },
    { tokenType: TokenType.String, tokenText: String.raw`\"` },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: ' and ' },
    { tokenType: TokenType.String, tokenText: String.raw`\n` },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: ' newline' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})

test('handles whitespace', () => {
  const tokens = tokenizeJson('{  "key"  :  "value"  }')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Whitespace, tokenText: '  ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'key' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Whitespace, tokenText: '  ' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: '  ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: 'value' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Whitespace, tokenText: '  ' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})

test('handles empty array', () => {
  const tokens = tokenizeJson('[]')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '[' },
    { tokenType: TokenType.Punctuation, tokenText: ']' },
  ])
})

test('handles nested arrays', () => {
  const tokens = tokenizeJson('[[1, 2], [3, 4]]')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '[' },
    { tokenType: TokenType.Punctuation, tokenText: '[' },
    { tokenType: TokenType.Numeric, tokenText: '1' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Numeric, tokenText: '2' },
    { tokenType: TokenType.Punctuation, tokenText: ']' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '[' },
    { tokenType: TokenType.Numeric, tokenText: '3' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Numeric, tokenText: '4' },
    { tokenType: TokenType.Punctuation, tokenText: ']' },
    { tokenType: TokenType.Punctuation, tokenText: ']' },
  ])
})

test('handles negative numbers', () => {
  const tokens = tokenizeJson('{"negative": -42, "negativeFloat": -3.14}')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'negative' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Numeric, tokenText: '-42' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'negativeFloat' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Numeric, tokenText: '-3.14' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})

test('handles scientific notation', () => {
  const tokens = tokenizeJson('{"scientific": 1.23e+4, "negativeScientific": -1.23e-4}')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'scientific' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Numeric, tokenText: '1.23e+4' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'negativeScientific' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Numeric, tokenText: '-1.23e-4' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})

test('handles unicode characters in strings', () => {
  const tokens = tokenizeJson('{"unicode": "Hello \u0041\u0042\u0043"}')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'unicode' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: 'Hello \u0041\u0042\u0043' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})

test('handles empty strings', () => {
  const tokens = tokenizeJson('{"empty": "", "spaces": "   "}')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'empty' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'spaces' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: '   ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})

test('handles special characters in property names', () => {
  const tokens = tokenizeJson('{"$id": "123", "user-name": "john", "user.name": "doe"}')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: '$id' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: '123' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'user-name' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: 'john' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ',' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'user.name' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: 'doe' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})

test('handles deeply nested structures', () => {
  const tokens = tokenizeJson('{"level1": {"level2": {"level3": {"value": "deep"}}}}')
  expect(tokens).toEqual([
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'level1' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'level2' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'level3' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '{' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyName, tokenText: 'value' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: ':' },
    { tokenType: TokenType.Whitespace, tokenText: ' ' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.JsonPropertyValueString, tokenText: 'deep' },
    { tokenType: TokenType.Punctuation, tokenText: '"' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
    { tokenType: TokenType.Punctuation, tokenText: '}' },
  ])
})
