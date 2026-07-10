import { expect, test } from '@jest/globals'
import { tokenizeJson } from '../src/parts/TokenizeJson/TokenizeJson.ts'
import * as TokenType from '../src/parts/TokenType/TokenType.ts'

test('tokenize empty object', () => {
  const tokens = tokenizeJson('{}')
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})

test('tokenize object with string property', () => {
  const tokens = tokenizeJson('{"name": "value"}')
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'name', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'value', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})

test('tokenize object with boolean property', () => {
  const tokens = tokenizeJson('{"active": true}')
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'active', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: 'true', tokenType: TokenType.LanguageConstant },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})

test('tokenize object with numeric property', () => {
  const tokens = tokenizeJson('{"count": 42}')
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'count', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '42', tokenType: TokenType.Numeric },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})

test('tokenize object with multiple properties', () => {
  const tokens = tokenizeJson('{"name": "value", "count": 42}')
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'name', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'value', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'count', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '42', tokenType: TokenType.Numeric },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})

test('tokenize array', () => {
  const tokens = tokenizeJson('["item1", "item2"]')
  expect(tokens).toEqual([
    { tokenText: '[', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'item1', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'item2', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ']', tokenType: TokenType.Punctuation },
  ])
})

test('tokenize nested object', () => {
  const tokens = tokenizeJson('{"nested": {"key": "value"}}')
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'nested', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'key', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'value', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: '}', tokenType: TokenType.Punctuation },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})

test('tokenize object with boolean and null values', () => {
  const tokens = tokenizeJson('{"bool": true, "null": null}')
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'bool', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: 'true', tokenType: TokenType.LanguageConstant },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'null', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: 'null', tokenType: TokenType.LanguageConstant },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})

test('tokenize array with mixed values', () => {
  const tokens = tokenizeJson('["string", 42, true, null, {"key": "value"}]')
  expect(tokens).toEqual([
    { tokenText: '[', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'string', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '42', tokenType: TokenType.Numeric },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: 'true', tokenType: TokenType.LanguageConstant },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: 'null', tokenType: TokenType.LanguageConstant },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'key', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'value', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: '}', tokenType: TokenType.Punctuation },
    { tokenText: ']', tokenType: TokenType.Punctuation },
  ])
})

test('handles escaped characters in strings', () => {
  const tokens = tokenizeJson(String.raw`{"escaped": "\"quotes\" and \n newline"}`)
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'escaped', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: String.raw`\"`, tokenType: TokenType.String },
    { tokenText: 'quotes', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: String.raw`\"`, tokenType: TokenType.String },
    { tokenText: ' and ', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: String.raw`\n`, tokenType: TokenType.String },
    { tokenText: ' newline', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})

test('handles whitespace', () => {
  const tokens = tokenizeJson('{  "key"  :  "value"  }')
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '  ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'key', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: '  ', tokenType: TokenType.Whitespace },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: '  ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'value', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: '  ', tokenType: TokenType.Whitespace },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})

test('handles empty array', () => {
  const tokens = tokenizeJson('[]')
  expect(tokens).toEqual([
    { tokenText: '[', tokenType: TokenType.Punctuation },
    { tokenText: ']', tokenType: TokenType.Punctuation },
  ])
})

test('handles nested arrays', () => {
  const tokens = tokenizeJson('[[1, 2], [3, 4]]')
  expect(tokens).toEqual([
    { tokenText: '[', tokenType: TokenType.Punctuation },
    { tokenText: '[', tokenType: TokenType.Punctuation },
    { tokenText: '1', tokenType: TokenType.Numeric },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '2', tokenType: TokenType.Numeric },
    { tokenText: ']', tokenType: TokenType.Punctuation },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '[', tokenType: TokenType.Punctuation },
    { tokenText: '3', tokenType: TokenType.Numeric },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '4', tokenType: TokenType.Numeric },
    { tokenText: ']', tokenType: TokenType.Punctuation },
    { tokenText: ']', tokenType: TokenType.Punctuation },
  ])
})

test('handles negative numbers', () => {
  const tokens = tokenizeJson('{"negative": -42, "negativeFloat": -3.14}')
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'negative', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '-42', tokenType: TokenType.Numeric },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'negativeFloat', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '-3.14', tokenType: TokenType.Numeric },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})

test('handles scientific notation', () => {
  const tokens = tokenizeJson('{"scientific": 1.23e+4, "negativeScientific": -1.23e-4}')
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'scientific', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '1.23e+4', tokenType: TokenType.Numeric },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'negativeScientific', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '-1.23e-4', tokenType: TokenType.Numeric },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})

test('handles unicode characters in strings', () => {
  const tokens = tokenizeJson('{"unicode": "Hello \u{41}\u{42}\u{43}"}')
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'unicode', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'Hello \u{41}\u{42}\u{43}', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})

test('handles empty strings', () => {
  const tokens = tokenizeJson('{"empty": "", "spaces": "   "}')
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'empty', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'spaces', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ' '.repeat(3), tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})

test('handles special characters in property names', () => {
  const tokens = tokenizeJson('{"$id": "123", "user-name": "john", "user.name": "doe"}')
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: '$id', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: '123', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'user-name', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'john', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ',', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'user.name', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'doe', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})

test('handles deeply nested structures', () => {
  const tokens = tokenizeJson('{"level1": {"level2": {"level3": {"value": "deep"}}}}')
  expect(tokens).toEqual([
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'level1', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'level2', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'level3', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '{', tokenType: TokenType.Punctuation },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'value', tokenType: TokenType.JsonPropertyName },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: ':', tokenType: TokenType.Punctuation },
    { tokenText: ' ', tokenType: TokenType.Whitespace },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: 'deep', tokenType: TokenType.JsonPropertyValueString },
    { tokenText: '"', tokenType: TokenType.Punctuation },
    { tokenText: '}', tokenType: TokenType.Punctuation },
    { tokenText: '}', tokenType: TokenType.Punctuation },
    { tokenText: '}', tokenType: TokenType.Punctuation },
    { tokenText: '}', tokenType: TokenType.Punctuation },
  ])
})
