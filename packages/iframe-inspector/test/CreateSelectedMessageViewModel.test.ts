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
        depth: 0,
        isExpandable: false,
        isExpanded: false,
        key: 'id',
        path: 'id',
        stringifiedValue: '1',
        value: 1,
      },
      {
        depth: 0,
        isExpandable: false,
        isExpanded: false,
        key: 'method',
        path: 'method',
        stringifiedValue: '"test"',
        value: 'test',
      },
      {
        depth: 0,
        isExpandable: true,
        isExpanded: false,
        key: 'params',
        path: 'params',
        stringifiedValue: '[]',
        value: [],
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
  expect(result.pairs).toHaveLength(4)
  expect(result.pairs[3]).toEqual({
    depth: 0,
    isExpandable: false,
    isExpanded: false,
    key: 'type',
    path: 'type',
    stringifiedValue: '"test-type"',
    value: 'test-type',
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
    data: {
      user: {
        age: 30,
        name: 'John',
      },
    },
    id: 3,
    method: 'test',
    params: [],
  }
  const messages = [message]
  const selectedIndex = 0
  const expandedPaths: string[] = []
  const result = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, selectedIndex, expandedPaths)
  expect(result.pairs).toHaveLength(4)
  expect(result.pairs.find((pair) => pair.key === 'data')).toEqual({
    depth: 0,
    isExpandable: true,
    isExpanded: false,
    key: 'data',
    path: 'data',
    stringifiedValue: '{}',
    value: message.data,
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
    data: {
      user: {
        age: 30,
        name: 'John',
      },
    },
    id: 4,
    method: 'test',
    params: [],
  }
  const messages = [message]
  const selectedIndex = 0
  const expandedPaths = ['data']
  const result = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, selectedIndex, expandedPaths)
  expect(result.pairs).toHaveLength(5)
  expect(result.pairs.find((pair) => pair.key === 'data')).toEqual({
    depth: 0,
    isExpandable: true,
    isExpanded: true,
    key: 'data',
    path: 'data',
    stringifiedValue: '{}',
    value: message.data,
  })
  expect(result.pairs.find((pair) => pair.key === 'user')).toEqual({
    depth: 1,
    isExpandable: true,
    isExpanded: false,
    key: 'user',
    path: 'data.user',
    stringifiedValue: '{}',
    value: message.data.user,
  })
})

test('CreateSelectedMessageViewModel - array values', () => {
  const message: Message & { items: string[] } = {
    id: 5,
    items: ['a', 'b', 'c'],
    method: 'test',
    params: [],
  }
  const messages = [message]
  const selectedIndex = 0
  const expandedPaths: string[] = []
  const result = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, selectedIndex, expandedPaths)
  expect(result.pairs).toHaveLength(4)
  expect(result.pairs.find((pair) => pair.key === 'items')).toEqual({
    depth: 0,
    isExpandable: true,
    isExpanded: false,
    key: 'items',
    path: 'items',
    stringifiedValue: '[]',
    value: message.items,
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
    active: true,
    config: {
      theme: 'dark',
    },
    count: 42,
    data: null,
    id: 6,
    items: [1, 2, 3],
    method: 'test',
    params: [],
  }
  const messages = [message]
  const selectedIndex = 0
  const expandedPaths: string[] = []
  const result = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, selectedIndex, expandedPaths)
  expect(result.pairs).toHaveLength(8)

  // Check additional values
  expect(result.pairs.find((pair) => pair.key === 'count')).toEqual({
    depth: 0,
    isExpandable: false,
    isExpanded: false,
    key: 'count',
    path: 'count',
    stringifiedValue: '42',
    value: 42,
  })

  expect(result.pairs.find((pair) => pair.key === 'active')).toEqual({
    depth: 0,
    isExpandable: false,
    isExpanded: false,
    key: 'active',
    path: 'active',
    stringifiedValue: 'true',
    value: true,
  })

  expect(result.pairs.find((pair) => pair.key === 'data')).toEqual({
    depth: 0,
    isExpandable: false,
    isExpanded: false,
    key: 'data',
    path: 'data',
    stringifiedValue: 'null',
    value: null,
  })

  expect(result.pairs.find((pair) => pair.key === 'items')).toEqual({
    depth: 0,
    isExpandable: true,
    isExpanded: false,
    key: 'items',
    path: 'items',
    stringifiedValue: '[]',
    value: message.items,
  })

  expect(result.pairs.find((pair) => pair.key === 'config')).toEqual({
    depth: 0,
    isExpandable: true,
    isExpanded: false,
    key: 'config',
    path: 'config',
    stringifiedValue: '{}',
    value: message.config,
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
