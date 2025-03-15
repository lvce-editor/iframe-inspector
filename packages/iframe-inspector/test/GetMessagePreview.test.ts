import { expect, test } from '@jest/globals'
import * as GetMessagePreview from '../src/parts/GetMessagePreview/GetMessagePreview.ts'

test('getMessagePreview - short message', () => {
  const maxLength = 100
  const message = { method: 'test', params: [1, 2, 3] } as any
  expect(GetMessagePreview.getMessagePreview(message, maxLength)).toBe('{"method":"test","params":[1,2,3]}')
})

test('getMessagePreview - long message', () => {
  const message = {
    method: 'test',
    params: ['very long string '.repeat(20)],
  } as any
  const maxLength = 100
  expect(GetMessagePreview.getMessagePreview(message, maxLength)).toBe(
    '{"method":"test","params":["very long string very long string very long string very long string very...',
  )
})

test('getMessagePreview - empty object', () => {
  const maxLength = 100
  const message = {} as any
  expect(GetMessagePreview.getMessagePreview(message, maxLength)).toBe('{}')
})
