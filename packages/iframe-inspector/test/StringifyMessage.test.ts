import { test, expect } from '@jest/globals'
import { stringifyMessage } from '../src/parts/StringifyMessage/StringifyMessage.ts'

test('stringifyMessage should stringify objects with proper formatting', () => {
  const input = { name: 'test', value: 123 }
  const expected = '{\n  "name": "test",\n  "value": 123\n}'
  expect(stringifyMessage(input)).toBe(expected)
})

test('stringifyMessage should handle arrays', () => {
  const input = [1, 2, 3]
  const expected = '[\n  1,\n  2,\n  3\n]'
  expect(stringifyMessage(input)).toBe(expected)
})

test('stringifyMessage should handle primitive values', () => {
  expect(stringifyMessage('string')).toBe('"string"')
  expect(stringifyMessage(123)).toBe('123')
  expect(stringifyMessage(true)).toBe('true')
  expect(stringifyMessage(null)).toBe('null')
  expect(stringifyMessage(undefined)).toBe(undefined)
})
