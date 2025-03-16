import { expect, test } from '@jest/globals'
import * as GetMessagePreview from '../src/parts/GetMessagePreview/GetMessagePreview.ts'

test('getMessagePreview - short message', () => {
  const maxLength = 100
  const message = JSON.stringify({ method: 'test', params: [1, 2, 3] })
  expect(GetMessagePreview.getMessagePreview(message, maxLength)).toBe('{"method":"test","params":[1,2,3]}')
})

test('getMessagePreview - long message', () => {
  const message = JSON.stringify({
    method: 'test',
    params: ['very long string '.repeat(20)],
  })
  const maxLength = 100
  expect(GetMessagePreview.getMessagePreview(message, maxLength)).toBe(
    '{"method":"test","params":["very long string very long string very long string very long string very...',
  )
})

test('getMessagePreview - empty object', () => {
  const maxLength = 100
  const message = JSON.stringify({})
  expect(GetMessagePreview.getMessagePreview(message, maxLength)).toBe('{}')
})
