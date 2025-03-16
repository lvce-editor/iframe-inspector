import { expect, test } from '@jest/globals'
import type { Message } from '../src/parts/Message/Message.ts'
import * as CreateSelectedMessageViewModel from '../src/parts/CreateSelectedMessageViewModel/CreateSelectedMessageViewModel.ts'

test('CreateSelectedMessageViewModel - empty message', () => {
  const message: Message = {
    id: 1,
    method: 'test',
    params: [],
  }
  const messages = [message]
  const selectedIndex = 0
  const expandedPaths: string[] = []
  const result = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, selectedIndex, expandedPaths)
  expect(result).toEqual({
    pairs: [
      {
        key: 'id',
        value: 1,
        stringifiedValue: '1',
        path: 'id',
        depth: 0,
        isExpandable: false,
        isExpanded: false,
      },
      {
        key: 'method',
        value: 'test',
        stringifiedValue: '"test"',
        path: 'method',
        depth: 0,
        isExpandable: false,
        isExpanded: false,
      },
      {
        key: 'params',
        value: [],
        stringifiedValue: '[]',
        path: 'params',
        depth: 0,
        isExpandable: true,
        isExpanded: false,
      },
    ],
  })
})

test('CreateSelectedMessageViewModel - message with additional properties', () => {
  const message: Message & { type: string } = {
    id: 2,
    method: 'test',
    params: [],
    type: 'test-type',
  }
  const messages = [message]
  const selectedIndex = 0
  const expandedPaths: string[] = []
  const result = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, selectedIndex, expandedPaths)
  expect(result.pairs.length).toBe(4)
  expect(result.pairs[3]).toEqual({
    key: 'type',
    value: 'test-type',
    stringifiedValue: '"test-type"',
    path: 'type',
    depth: 0,
    isExpandable: false,
    isExpanded: false,
  })
})

test('CreateSelectedMessageViewModel - nested objects', () => {
  interface UserData {
    user: {
      name: string
      age: number
    }
  }

  const message: Message & { data: UserData } = {
    id: 3,
    method: 'test',
    params: [],
    data: {
      user: {
        name: 'John',
        age: 30,
      },
    },
  }
  const messages = [message]
  const selectedIndex = 0
  const expandedPaths: string[] = []
  const result = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, selectedIndex, expandedPaths)
  expect(result.pairs.length).toBe(4)
  expect(result.pairs[3]).toEqual({
    key: 'data',
    value: message.data,
    stringifiedValue: '{}',
    path: 'data',
    depth: 0,
    isExpandable: true,
    isExpanded: false,
  })
})

test('CreateSelectedMessageViewModel - expanded nested objects', () => {
  interface UserData {
    user: {
      name: string
      age: number
    }
  }

  const message: Message & { data: UserData } = {
    id: 4,
    method: 'test',
    params: [],
    data: {
      user: {
        name: 'John',
        age: 30,
      },
    },
  }
  const messages = [message]
  const selectedIndex = 0
  const expandedPaths = ['data']
  const result = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, selectedIndex, expandedPaths)
  expect(result.pairs.length).toBe(5)
  expect(result.pairs[3]).toEqual({
    key: 'data',
    value: message.data,
    stringifiedValue: '{}',
    path: 'data',
    depth: 0,
    isExpandable: true,
    isExpanded: true,
  })
  expect(result.pairs[4]).toEqual({
    key: 'user',
    value: message.data.user,
    stringifiedValue: '{}',
    path: 'data.user',
    depth: 1,
    isExpandable: true,
    isExpanded: false,
  })
})

test('CreateSelectedMessageViewModel - array values', () => {
  const message: Message & { items: string[] } = {
    id: 5,
    method: 'test',
    params: [],
    items: ['a', 'b', 'c'],
  }
  const messages = [message]
  const selectedIndex = 0
  const expandedPaths: string[] = []
  const result = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, selectedIndex, expandedPaths)
  expect(result.pairs.length).toBe(4)
  expect(result.pairs[3]).toEqual({
    key: 'items',
    value: message.items,
    stringifiedValue: '[]',
    path: 'items',
    depth: 0,
    isExpandable: true,
    isExpanded: false,
  })
})

test('CreateSelectedMessageViewModel - mixed types', () => {
  interface Config {
    theme: string
  }

  const message: Message & {
    count: number
    active: boolean
    data: null
    items: number[]
    config: Config
  } = {
    id: 6,
    method: 'test',
    params: [],
    count: 42,
    active: true,
    data: null,
    items: [1, 2, 3],
    config: {
      theme: 'dark',
    },
  }
  const messages = [message]
  const selectedIndex = 0
  const expandedPaths: string[] = []
  const result = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, selectedIndex, expandedPaths)
  expect(result.pairs.length).toBe(8)

  // Check additional values
  expect(result.pairs[3]).toEqual({
    key: 'count',
    value: 42,
    stringifiedValue: '42',
    path: 'count',
    depth: 0,
    isExpandable: false,
    isExpanded: false,
  })

  expect(result.pairs[4]).toEqual({
    key: 'active',
    value: true,
    stringifiedValue: 'true',
    path: 'active',
    depth: 0,
    isExpandable: false,
    isExpanded: false,
  })

  expect(result.pairs[5]).toEqual({
    key: 'data',
    value: null,
    stringifiedValue: 'null',
    path: 'data',
    depth: 0,
    isExpandable: false,
    isExpanded: false,
  })

  expect(result.pairs[6]).toEqual({
    key: 'items',
    value: message.items,
    stringifiedValue: '[]',
    path: 'items',
    depth: 0,
    isExpandable: true,
    isExpanded: false,
  })

  expect(result.pairs[7]).toEqual({
    key: 'config',
    value: message.config,
    stringifiedValue: '{}',
    path: 'config',
    depth: 0,
    isExpandable: true,
    isExpanded: false,
  })
})

test('CreateSelectedMessageViewModel - no selection', () => {
  const messages: Message[] = [{ id: 7, method: 'test', params: [] }]
  const selectedIndex = -1
  const expandedPaths: string[] = []
  const result = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, selectedIndex, expandedPaths)
  expect(result).toEqual({
    pairs: [],
  })
})
