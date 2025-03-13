import { beforeEach, expect, test } from '@jest/globals'
import * as MessageState from '../src/parts/MessageState/MessageState.ts'

beforeEach(() => {
  MessageState.reset()
})

test('getMessages - empty', () => {
  expect(MessageState.getMessages()).toEqual([])
})

test('addMessage', () => {
  const message = {
    method: 'test',
    params: ['a', 'b'],
  }
  MessageState.addMessage(message)
  expect(MessageState.getMessages()).toEqual([message])
})

test('addMessage - multiple messages', () => {
  const message1 = {
    method: 'test1',
    params: ['a', 'b'],
  }
  const message2 = {
    method: 'test2',
    params: ['c', 'd'],
  }
  MessageState.addMessage(message1)
  MessageState.addMessage(message2)
  expect(MessageState.getMessages()).toEqual([message1, message2])
})
