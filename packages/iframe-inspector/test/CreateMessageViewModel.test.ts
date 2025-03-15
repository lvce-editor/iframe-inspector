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
      isSelected: false,
      messagePreview: '{"id":1,"method":"test","params":[]}',
      messagePreviewLength: '36',
      isEven: true,
      messageRaw: {
        id: 1,
        method: 'test',
        params: [],
      },
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
      isEven: true,
      isSelected: true,
      messagePreview: '{"id":1,"method":"test","params":[]}',
      messagePreviewLength: '36',
      messageRaw: {
        id: 1,
        method: 'test',
        params: [],
      },
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
      isSelected: false,
      messagePreview: '{"id":1,"method":"test1","params":[]}',
      messagePreviewLength: '37',
      isEven: true,
      messageRaw: {
        id: 1,
        method: 'test1',
        params: [],
      },
    },
    {
      isSelected: true,
      messagePreview: '{"id":2,"method":"test2","params":[]}',
      messagePreviewLength: '37',
      isEven: false,
      messageRaw: {
        id: 2,
        method: 'test2',
        params: [],
      },
    },
  ])
})
