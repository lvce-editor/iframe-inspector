import { expect, test } from '@jest/globals'
import * as CreateMessageViewModels from '../src/parts/CreateMessageViewModels/CreateMessageViewModels.ts'
import * as TokenType from '../src/parts/TokenType/TokenType.ts'

test('createMessageViewModel - empty', () => {
  expect(CreateMessageViewModels.createMessageViewModels([], -1, 100, '')).toEqual([])
})

test.skip('createMessageViewModel - single message not selected', () => {
  const message = {
    id: 1,
    method: 'test',
    params: [],
  }
  expect(CreateMessageViewModels.createMessageViewModels([message], -1, 100, '')).toEqual([
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
      messageTokens: [
        TokenType.Punctuation,
        '{',
        TokenType.JsonPropertyValueString,
        '"id"',
        TokenType.Punctuation,
        ':',
        TokenType.Numeric,
        '1',
        TokenType.Punctuation,
        ',',
        TokenType.JsonPropertyValueString,
        '"method"',
        TokenType.Punctuation,
        ':',
        TokenType.JsonPropertyValueString,
        '"test"',
        TokenType.Punctuation,
        ',',
        TokenType.JsonPropertyValueString,
        '"params"',
        TokenType.Punctuation,
        ':',
        TokenType.Punctuation,
        '[',
        TokenType.Punctuation,
        ']',
        TokenType.Punctuation,
        '}',
      ],
    },
  ])
})

test.skip('createMessageViewModel - single message selected', () => {
  const message = {
    id: 1,
    method: 'test',
    params: [],
  }
  expect(CreateMessageViewModels.createMessageViewModels([message], 0, 100, '')).toEqual([
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
      messageTokens: [
        TokenType.Punctuation,
        '{',
        TokenType.JsonPropertyValueString,
        '"id"',
        TokenType.Punctuation,
        ':',
        TokenType.Numeric,
        '1',
        TokenType.Punctuation,
        ',',
        TokenType.JsonPropertyValueString,
        '"method"',
        TokenType.Punctuation,
        ':',
        TokenType.JsonPropertyValueString,
        '"test"',
        TokenType.Punctuation,
        ',',
        TokenType.JsonPropertyValueString,
        '"params"',
        TokenType.Punctuation,
        ':',
        TokenType.Punctuation,
        '[',
        TokenType.Punctuation,
        ']',
        TokenType.Punctuation,
        '}',
      ],
    },
  ])
})

test.skip('createMessageViewModel - multiple messages', () => {
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
  expect(CreateMessageViewModels.createMessageViewModels(messages, 1, 100, '')).toEqual([
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
      messageTokens: [
        TokenType.Punctuation,
        '{',
        TokenType.JsonPropertyValueString,
        '"id"',
        TokenType.Punctuation,
        ':',
        TokenType.Numeric,
        '1',
        TokenType.Punctuation,
        ',',
        TokenType.JsonPropertyValueString,
        '"method"',
        TokenType.Punctuation,
        ':',
        TokenType.JsonPropertyValueString,
        '"test1"',
        TokenType.Punctuation,
        ',',
        TokenType.JsonPropertyValueString,
        '"params"',
        TokenType.Punctuation,
        ':',
        TokenType.Punctuation,
        '[',
        TokenType.Punctuation,
        ']',
        TokenType.Punctuation,
        '}',
      ],
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
      messageTokens: [
        TokenType.Punctuation,
        '{',
        TokenType.JsonPropertyValueString,
        '"id"',
        TokenType.Punctuation,
        ':',
        TokenType.Numeric,
        '2',
        TokenType.Punctuation,
        ',',
        TokenType.JsonPropertyValueString,
        '"method"',
        TokenType.Punctuation,
        ':',
        TokenType.JsonPropertyValueString,
        '"test2"',
        TokenType.Punctuation,
        ',',
        TokenType.JsonPropertyValueString,
        '"params"',
        TokenType.Punctuation,
        ':',
        TokenType.Punctuation,
        '[',
        TokenType.Punctuation,
        ']',
        TokenType.Punctuation,
        '}',
      ],
    },
  ])
})
