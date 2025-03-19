import { test, expect } from '@jest/globals'
import { matchesFilterText } from '../src/parts/Message/MatchesFilterText.ts'

test('returns true when filter text is empty', () => {
  const message = { id: 1, method: 'test', params: [] }
  expect(matchesFilterText(message, '')).toBe(true)
})

test.skip('matches method name case-insensitively', () => {
  const message = { id: 1, method: 'TestMethod', params: [] }
  expect(matchesFilterText(message, 'test')).toBe(true)
})

test('matches params content', () => {
  const message = { id: 1, method: 'test', params: ['hello', 'world'] }
  expect(matchesFilterText(message, 'hello')).toBe(true)
})

test('returns false when no match', () => {
  const message = { id: 1, method: 'test', params: ['hello', 'world'] }
  expect(matchesFilterText(message, 'xyz')).toBe(false)
})
