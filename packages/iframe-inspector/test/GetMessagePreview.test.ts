import { expect, test } from '@jest/globals'
import * as GetMessagePreview from '../src/parts/GetMessagePreview/GetMessagePreview.ts'

test('getMessagePreview - short message', () => {
  const message = { method: 'test', params: [1, 2, 3] }
  expect(GetMessagePreview.getMessagePreview(message)).toBe('{"method":"test","params":[1,2,3]}')
})

test('getMessagePreview - long message', () => {
  const message = {
    method: 'test',
    params: ['very long string '.repeat(20)],
  }
  expect(GetMessagePreview.getMessagePreview(message)).toBe(
    '{"method":"test","params":["very long string very long string very long string very long string very long st...',
  )
})

test('getMessagePreview - empty object', () => {
  const message = {}
  expect(GetMessagePreview.getMessagePreview(message)).toBe('{}')
})
