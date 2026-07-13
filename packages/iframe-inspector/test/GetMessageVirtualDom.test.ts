import { expect, test } from '@jest/globals'
import type { MessageViewModel } from '../src/parts/MessageViewModel/MessageViewModel.ts'
import { getMessageVirtualDom } from '../src/parts/GetMessageVirtualDom/GetMessageVirtualDom.ts'
import * as TokenType from '../src/parts/TokenType/TokenType.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getMessageVirtualDom - not selected', () => {
  const message: MessageViewModel = {
    isEven: false,
    isSelected: false,
    messagePreviewLength: '36',
    messageTokens: [
      { tokenText: '{', tokenType: TokenType.Punctuation },
      { tokenText: '"id"', tokenType: TokenType.JsonPropertyValueString },
      { tokenText: ':', tokenType: TokenType.Punctuation },
      { tokenText: '1', tokenType: TokenType.Numeric },
      { tokenText: ',', tokenType: TokenType.Punctuation },
      { tokenText: '"method"', tokenType: TokenType.JsonPropertyValueString },
      { tokenText: ':', tokenType: TokenType.Punctuation },
      { tokenText: '"test"', tokenType: TokenType.JsonPropertyValueString },
      { tokenText: ',', tokenType: TokenType.Punctuation },
      { tokenText: '"params"', tokenType: TokenType.JsonPropertyValueString },
      { tokenText: ':', tokenType: TokenType.Punctuation },
      { tokenText: '[', tokenType: TokenType.Punctuation },
      { tokenText: ']', tokenType: TokenType.Punctuation },
      { tokenText: '}', tokenType: TokenType.Punctuation },
    ],
  }
  expect(getMessageVirtualDom(message)).toEqual([
    {
      childCount: 2,
      className: 'TableRow TableRowOdd',
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      childCount: 14,
      className: 'IframeInspectorCode',
      type: VirtualDomElements.Code,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '{',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token JsonPropertyValueString',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '"id"',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ':',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Numeric',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '1',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ',',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token JsonPropertyValueString',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '"method"',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ':',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token JsonPropertyValueString',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '"test"',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ',',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token JsonPropertyValueString',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '"params"',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ':',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '[',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ']',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '}',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      childCount: 1,
      className: 'Token Numeric',
      type: 8,
    },
    {
      childCount: 0,
      text: '36',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getMessageVirtualDom - selected', () => {
  const message: MessageViewModel = {
    isEven: false,
    isSelected: true,
    messagePreviewLength: '36',
    messageTokens: [
      { tokenText: '{', tokenType: TokenType.Punctuation },
      { tokenText: '"id"', tokenType: TokenType.JsonPropertyValueString },
      { tokenText: ':', tokenType: TokenType.Punctuation },
      { tokenText: '1', tokenType: TokenType.Numeric },
      { tokenText: ',', tokenType: TokenType.Punctuation },
      { tokenText: '"method"', tokenType: TokenType.JsonPropertyValueString },
      { tokenText: ':', tokenType: TokenType.Punctuation },
      { tokenText: '"test"', tokenType: TokenType.JsonPropertyValueString },
      { tokenText: ',', tokenType: TokenType.Punctuation },
      { tokenText: '"params"', tokenType: TokenType.JsonPropertyValueString },
      { tokenText: ':', tokenType: TokenType.Punctuation },
      { tokenText: '[', tokenType: TokenType.Punctuation },
      { tokenText: ']', tokenType: TokenType.Punctuation },
      { tokenText: '}', tokenType: TokenType.Punctuation },
    ],
  }
  expect(getMessageVirtualDom(message)).toEqual([
    {
      childCount: 2,
      className: 'TableRow TableRowSelected TableRowOdd',
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      childCount: 14,
      className: 'IframeInspectorCode',
      type: VirtualDomElements.Code,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '{',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token JsonPropertyValueString',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '"id"',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ':',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Numeric',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '1',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ',',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token JsonPropertyValueString',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '"method"',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ':',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token JsonPropertyValueString',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '"test"',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ',',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token JsonPropertyValueString',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '"params"',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ':',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '[',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ']',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '}',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      childCount: 1,
      className: 'Token Numeric',
      type: 8,
    },
    {
      childCount: 0,
      text: '36',
      type: VirtualDomElements.Text,
    },
  ])
})

test('getMessageVirtualDom - long message', () => {
  const longString = 'a'.repeat(65)
  const message: MessageViewModel = {
    isEven: false,
    isSelected: false,
    messagePreviewLength: '103',
    messageTokens: [
      { tokenText: '{', tokenType: TokenType.Punctuation },
      { tokenText: '"id"', tokenType: TokenType.JsonPropertyValueString },
      { tokenText: ':', tokenType: TokenType.Punctuation },
      { tokenText: '1', tokenType: TokenType.Numeric },
      { tokenText: ',', tokenType: TokenType.Punctuation },
      { tokenText: '"method"', tokenType: TokenType.JsonPropertyValueString },
      { tokenText: ':', tokenType: TokenType.Punctuation },
      { tokenText: '"test"', tokenType: TokenType.JsonPropertyValueString },
      { tokenText: ',', tokenType: TokenType.Punctuation },
      { tokenText: '"params"', tokenType: TokenType.JsonPropertyValueString },
      { tokenText: ':', tokenType: TokenType.Punctuation },
      { tokenText: '[', tokenType: TokenType.Punctuation },
      { tokenText: `"${longString}...`, tokenType: TokenType.JsonPropertyValueString },
    ],
  }
  expect(getMessageVirtualDom(message)).toEqual([
    {
      childCount: 2,
      className: 'TableRow TableRowOdd',
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      childCount: 13,
      className: 'IframeInspectorCode',
      type: VirtualDomElements.Code,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '{',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token JsonPropertyValueString',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '"id"',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ':',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Numeric',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '1',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ',',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token JsonPropertyValueString',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '"method"',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ':',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token JsonPropertyValueString',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '"test"',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ',',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token JsonPropertyValueString',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '"params"',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: ':',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token Punctuation',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: '[',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'Token JsonPropertyValueString',
      type: VirtualDomElements.Span,
    },
    {
      childCount: 0,
      text: `"${longString}...`,
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Td,
    },
    {
      childCount: 1,
      className: 'Token Numeric',
      type: 8,
    },
    {
      childCount: 0,
      text: '103',
      type: VirtualDomElements.Text,
    },
  ])
})
