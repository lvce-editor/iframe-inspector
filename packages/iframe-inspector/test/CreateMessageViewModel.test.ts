import { expect, test } from '@jest/globals'
import * as CreateMessageViewModel from '../src/parts/CreateMessageViewModel/CreateMessageViewModel.ts'

test('createMessageViewModel - empty', () => {
  expect(CreateMessageViewModel.createMessageViewModel([], -1)).toEqual([])
})

test('createMessageViewModel - single message not selected', () => {
  const message = {
    id: 1,
    method: 'test',
    params: [],
  }
  expect(CreateMessageViewModel.createMessageViewModel([message], -1)).toEqual([
    {
      id: 1,
      method: 'test',
      params: [],
      isSelected: false,
      messagePreview: '{"id":1,"method":"test","params":[]}',
      messagePreviewLength: 36,
    },
  ])
})

test('createMessageViewModel - single message selected', () => {
  const message = {
    id: 1,
    method: 'test',
    params: [],
  }
  expect(CreateMessageViewModel.createMessageViewModel([message], 0)).toEqual([
    {
      id: 1,
      method: 'test',
      params: [],
      isSelected: true,
      messagePreview: '{"id":1,"method":"test","params":[]}',
      messagePreviewLength: 36,
    },
  ])
})

test('createMessageViewModel - multiple messages', () => {
  const messages = [
    {
      id: 1,
      method: 'test1',
      params: [],
    },
    {
      id: 2,
      method: 'test2',
      params: [],
    },
  ]
  expect(CreateMessageViewModel.createMessageViewModel(messages, 1)).toEqual([
    {
      id: 1,
      method: 'test1',
      params: [],
      isSelected: false,
      messagePreview: '{"id":1,"method":"test1","params":[]}',
      messagePreviewLength: 37,
    },
    {
      id: 2,
      method: 'test2',
      params: [],
      isSelected: true,
      messagePreview: '{"id":2,"method":"test2","params":[]}',
      messagePreviewLength: 37,
    },
  ])
})
