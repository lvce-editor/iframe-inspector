import { expect, test } from '@jest/globals'
import * as CreateMessageViewModels from '../src/parts/CreateMessageViewModels/CreateMessageViewModels.ts'
import * as TokenType from '../src/parts/TokenType/TokenType.ts'

test('createMessageViewModel - empty', () => {
  const isFocused = false
  expect(CreateMessageViewModels.createMessageViewModels([], -1, 100, '', isFocused)).toEqual([])
})

test('createMessageViewModel - single message not selected', () => {
  const message = {
    id: 1,
    method: 'test',
    params: [],
  }
  const isFocused = false
  expect(CreateMessageViewModels.createMessageViewModels([message], -1, 100, '', isFocused)).toEqual([
    {
      isEven: true,
      isSelected: false,
      messagePreviewLength: '36',
      messageTokens: [
        { tokenText: '{', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'id', tokenType: TokenType.JsonPropertyName },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ':', tokenType: TokenType.Punctuation },
        { tokenText: '1', tokenType: TokenType.Numeric },
        { tokenText: ',', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'method', tokenType: TokenType.JsonPropertyName },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ':', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'test', tokenType: TokenType.JsonPropertyValueString },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ',', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'params', tokenType: TokenType.JsonPropertyName },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ':', tokenType: TokenType.Punctuation },
        { tokenText: '[', tokenType: TokenType.Punctuation },
        { tokenText: ']', tokenType: TokenType.Punctuation },
        { tokenText: '}', tokenType: TokenType.Punctuation },
      ],
    },
  ])
})

test('createMessageViewModel - single message selected', () => {
  const message = {
    id: 1,
    method: 'test',
    params: [],
  }
  const isFocused = true
  expect(CreateMessageViewModels.createMessageViewModels([message], 0, 100, '', isFocused)).toEqual([
    {
      isEven: true,
      isSelected: true,
      messagePreviewLength: '36',
      messageTokens: [
        { tokenText: '{', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'id', tokenType: TokenType.JsonPropertyName },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ':', tokenType: TokenType.Punctuation },
        { tokenText: '1', tokenType: TokenType.Numeric },
        { tokenText: ',', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'method', tokenType: TokenType.JsonPropertyName },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ':', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'test', tokenType: TokenType.JsonPropertyValueString },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ',', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'params', tokenType: TokenType.JsonPropertyName },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ':', tokenType: TokenType.Punctuation },
        { tokenText: '[', tokenType: TokenType.Punctuation },
        { tokenText: ']', tokenType: TokenType.Punctuation },
        { tokenText: '}', tokenType: TokenType.Punctuation },
      ],
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
  const isFocused = false
  expect(CreateMessageViewModels.createMessageViewModels(messages, 1, 100, '', isFocused)).toEqual([
    {
      isEven: true,
      isSelected: false,
      messagePreviewLength: '37',
      messageTokens: [
        { tokenText: '{', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'id', tokenType: TokenType.JsonPropertyName },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ':', tokenType: TokenType.Punctuation },
        { tokenText: '1', tokenType: TokenType.Numeric },
        { tokenText: ',', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'method', tokenType: TokenType.JsonPropertyName },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ':', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'test1', tokenType: TokenType.JsonPropertyValueString },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ',', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'params', tokenType: TokenType.JsonPropertyName },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ':', tokenType: TokenType.Punctuation },
        { tokenText: '[', tokenType: TokenType.Punctuation },
        { tokenText: ']', tokenType: TokenType.Punctuation },
        { tokenText: '}', tokenType: TokenType.Punctuation },
      ],
    },
    {
      isEven: false,
      isSelected: false,
      messagePreviewLength: '37',
      messageTokens: [
        { tokenText: '{', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'id', tokenType: TokenType.JsonPropertyName },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ':', tokenType: TokenType.Punctuation },
        { tokenText: '2', tokenType: TokenType.Numeric },
        { tokenText: ',', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'method', tokenType: TokenType.JsonPropertyName },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ':', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'test2', tokenType: TokenType.JsonPropertyValueString },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ',', tokenType: TokenType.Punctuation },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: 'params', tokenType: TokenType.JsonPropertyName },
        { tokenText: '"', tokenType: TokenType.Punctuation },
        { tokenText: ':', tokenType: TokenType.Punctuation },
        { tokenText: '[', tokenType: TokenType.Punctuation },
        { tokenText: ']', tokenType: TokenType.Punctuation },
        { tokenText: '}', tokenType: TokenType.Punctuation },
      ],
    },
  ])
})
