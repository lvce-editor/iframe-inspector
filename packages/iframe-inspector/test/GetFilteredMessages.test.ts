import { test, expect } from '@jest/globals'
import { getFilteredMessages } from '../src/parts/GetFilteredMessages/GetFilteredMessages.ts'

test('returns all messages when filter text is empty', () => {
  const messages = [
    { id: 1, method: 'test1', params: [] },
    { id: 2, method: 'test2', params: [] },
  ]
  expect(getFilteredMessages(messages, '')).toEqual(messages)
})

test('returns filtered messages when filter text matches', () => {
  const messages = [
    { id: 1, method: 'test1', params: [] },
    { id: 2, method: 'hello', params: [] },
  ]
  expect(getFilteredMessages(messages, 'test')).toEqual([{ id: 1, method: 'test1', params: [] }])
})
