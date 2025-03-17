import { expect, test } from '@jest/globals'
import { tokenizeJson } from '../src/parts/TokenizeJson/TokenizeJson.ts'

test('tokenize empty object', () => {
  const tokens = tokenizeJson('{}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('tokenize object with string property', () => {
  const tokens = tokenizeJson('{"name": "value"}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'name' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyValueString', tokenText: 'value' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('tokenize object with number property', () => {
  const tokens = tokenizeJson('{"age": 42}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'age' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Numeric', tokenText: '42' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('tokenize object with boolean property', () => {
  const tokens = tokenizeJson('{"active": true}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'active' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'LanguageConstant', tokenText: 'true' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('tokenize array', () => {
  const tokens = tokenizeJson('[1, 2, 3]')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '[' },
    { tokenType: 'Numeric', tokenText: '1' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Numeric', tokenText: '2' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Numeric', tokenText: '3' },
    { tokenType: 'Punctuation', tokenText: ']' },
  ])
})

test('simple object with string value', () => {
  const tokens = tokenizeJson('{"key": "value"}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'key' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyValueString', tokenText: 'value' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('object with multiple properties', () => {
  const tokens = tokenizeJson('{"key1": "value1", "key2": "value2"}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'key1' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyValueString', tokenText: 'value1' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'key2' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyValueString', tokenText: 'value2' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('object with numeric values', () => {
  const tokens = tokenizeJson('{"number": 42, "float": 3.14}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'number' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Numeric', tokenText: '42' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'float' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Numeric', tokenText: '3.14' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('object with boolean and null values', () => {
  const tokens = tokenizeJson('{"bool": true, "null": null}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'bool' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'LanguageConstant', tokenText: 'true' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'null' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'LanguageConstant', tokenText: 'null' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('nested objects', () => {
  const tokens = tokenizeJson('{"outer": {"inner": "value"}}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'outer' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'inner' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyValueString', tokenText: 'value' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: '}' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('array with mixed values', () => {
  const tokens = tokenizeJson('["string", 42, true, null, {"key": "value"}]')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '[' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyValueString', tokenText: 'string' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Numeric', tokenText: '42' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'LanguageConstant', tokenText: 'true' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'LanguageConstant', tokenText: 'null' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'key' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyValueString', tokenText: 'value' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: '}' },
    { tokenType: 'Punctuation', tokenText: ']' },
  ])
})

test('handles escaped characters in strings', () => {
  const tokens = tokenizeJson(String.raw`{"escaped": "\"quotes\" and \n newline"}`)
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'escaped' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'String', tokenText: String.raw`\"` },
    { tokenType: 'JsonPropertyValueString', tokenText: 'quotes' },
    { tokenType: 'String', tokenText: String.raw`\"` },
    { tokenType: 'JsonPropertyValueString', tokenText: ' and ' },
    { tokenType: 'String', tokenText: String.raw`\n` },
    { tokenType: 'JsonPropertyValueString', tokenText: ' newline' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('handles whitespace', () => {
  const tokens = tokenizeJson('{  "key"  :  "value"  }')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Whitespace', tokenText: '  ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'key' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Whitespace', tokenText: '  ' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: '  ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyValueString', tokenText: 'value' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Whitespace', tokenText: '  ' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('handles empty array', () => {
  const tokens = tokenizeJson('[]')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '[' },
    { tokenType: 'Punctuation', tokenText: ']' },
  ])
})

test('handles nested arrays', () => {
  const tokens = tokenizeJson('[[1, 2], [3, 4]]')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '[' },
    { tokenType: 'Punctuation', tokenText: '[' },
    { tokenType: 'Numeric', tokenText: '1' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Numeric', tokenText: '2' },
    { tokenType: 'Punctuation', tokenText: ']' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '[' },
    { tokenType: 'Numeric', tokenText: '3' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Numeric', tokenText: '4' },
    { tokenType: 'Punctuation', tokenText: ']' },
    { tokenType: 'Punctuation', tokenText: ']' },
  ])
})

test('handles negative numbers', () => {
  const tokens = tokenizeJson('{"negative": -42, "negativeFloat": -3.14}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'negative' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Numeric', tokenText: '-42' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'negativeFloat' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Numeric', tokenText: '-3.14' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('handles scientific notation', () => {
  const tokens = tokenizeJson('{"scientific": 1.23e+4, "negativeScientific": -1.23e-4}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'scientific' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Numeric', tokenText: '1.23e+4' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'negativeScientific' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Numeric', tokenText: '-1.23e-4' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('handles unicode characters in strings', () => {
  const tokens = tokenizeJson('{"unicode": "Hello \u0041\u0042\u0043"}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'unicode' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyValueString', tokenText: 'Hello \u0041\u0042\u0043' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('handles empty strings', () => {
  const tokens = tokenizeJson('{"empty": "", "spaces": "   "}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'empty' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'spaces' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyValueString', tokenText: '   ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('handles special characters in property names', () => {
  const tokens = tokenizeJson('{"$id": "123", "user-name": "john", "user.name": "doe"}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: '$id' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyValueString', tokenText: '123' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'user-name' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyValueString', tokenText: 'john' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'user.name' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyValueString', tokenText: 'doe' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})

test('handles deeply nested structures', () => {
  const tokens = tokenizeJson('{"level1": {"level2": {"level3": {"value": "deep"}}}}')
  expect(tokens).toEqual([
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'level1' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'level2' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'level3' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyName', tokenText: 'value' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Whitespace', tokenText: ' ' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'JsonPropertyValueString', tokenText: 'deep' },
    { tokenType: 'Punctuation', tokenText: '"' },
    { tokenType: 'Punctuation', tokenText: '}' },
    { tokenType: 'Punctuation', tokenText: '}' },
    { tokenType: 'Punctuation', tokenText: '}' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ])
})
