import { expect, test } from '@jest/globals'
import type { MessageViewModel } from '../src/parts/MessageViewModel/MessageViewModel.ts'
import { getMessageVirtualDom } from '../src/parts/GetMessageVirtualDom/GetMessageVirtualDom.ts'
import * as TokenType from '../src/parts/TokenType/TokenType.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getMessageVirtualDom - not selected', () => {
  const message: MessageViewModel = {
    isSelected: false,
    messagePreviewLength: '36',
    isEven: false,
    messageTokens: [
      { tokenType: TokenType.Punctuation, tokenText: '{' },
      { tokenType: TokenType.JsonPropertyValueString, tokenText: '"id"' },
      { tokenType: TokenType.Punctuation, tokenText: ':' },
      { tokenType: TokenType.Numeric, tokenText: '1' },
      { tokenType: TokenType.Punctuation, tokenText: ',' },
      { tokenType: TokenType.JsonPropertyValueString, tokenText: '"method"' },
      { tokenType: TokenType.Punctuation, tokenText: ':' },
      { tokenType: TokenType.JsonPropertyValueString, tokenText: '"test"' },
      { tokenType: TokenType.Punctuation, tokenText: ',' },
      { tokenType: TokenType.JsonPropertyValueString, tokenText: '"params"' },
      { tokenType: TokenType.Punctuation, tokenText: ':' },
      { tokenType: TokenType.Punctuation, tokenText: '[' },
      { tokenType: TokenType.Punctuation, tokenText: ']' },
      { tokenType: TokenType.Punctuation, tokenText: '}' },
    ],
  }
  expect(getMessageVirtualDom(message)).toEqual([
    {
      type: VirtualDomElements.Tr,
      className: 'TableRow TableRowOdd',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 1,
    },
    {
      childCount: 14,
      className: 'IframeInspectorCode',
      type: VirtualDomElements.Code,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '{',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token JsonPropertyValueString',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"id"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ':',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Numeric',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '1',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ',',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token JsonPropertyValueString',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"method"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ':',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token JsonPropertyValueString',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"test"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ',',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token JsonPropertyValueString',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"params"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ':',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '[',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ']',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '}',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 1,
    },
    {
      childCount: 1,
      className: 'Token Numeric',
      type: 8,
    },
    {
      type: VirtualDomElements.Text,
      text: '36',
      childCount: 0,
    },
  ])
})

test('getMessageVirtualDom - selected', () => {
  const message: MessageViewModel = {
    isSelected: true,
    messagePreviewLength: '36',
    isEven: false,
    messageTokens: [
      { tokenType: TokenType.Punctuation, tokenText: '{' },
      { tokenType: TokenType.JsonPropertyValueString, tokenText: '"id"' },
      { tokenType: TokenType.Punctuation, tokenText: ':' },
      { tokenType: TokenType.Numeric, tokenText: '1' },
      { tokenType: TokenType.Punctuation, tokenText: ',' },
      { tokenType: TokenType.JsonPropertyValueString, tokenText: '"method"' },
      { tokenType: TokenType.Punctuation, tokenText: ':' },
      { tokenType: TokenType.JsonPropertyValueString, tokenText: '"test"' },
      { tokenType: TokenType.Punctuation, tokenText: ',' },
      { tokenType: TokenType.JsonPropertyValueString, tokenText: '"params"' },
      { tokenType: TokenType.Punctuation, tokenText: ':' },
      { tokenType: TokenType.Punctuation, tokenText: '[' },
      { tokenType: TokenType.Punctuation, tokenText: ']' },
      { tokenType: TokenType.Punctuation, tokenText: '}' },
    ],
  }
  expect(getMessageVirtualDom(message)).toEqual([
    {
      type: VirtualDomElements.Tr,
      className: 'TableRow TableRowSelected TableRowOdd',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 1,
    },
    {
      childCount: 14,
      className: 'IframeInspectorCode',
      type: VirtualDomElements.Code,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '{',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token JsonPropertyValueString',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"id"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ':',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Numeric',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '1',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ',',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token JsonPropertyValueString',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"method"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ':',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token JsonPropertyValueString',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"test"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ',',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token JsonPropertyValueString',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"params"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ':',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '[',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ']',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '}',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 1,
    },
    {
      childCount: 1,
      className: 'Token Numeric',
      type: 8,
    },
    {
      type: VirtualDomElements.Text,
      text: '36',
      childCount: 0,
    },
  ])
})

test('getMessageVirtualDom - long message', () => {
  const longString = 'a'.repeat(65)
  const message: MessageViewModel = {
    isSelected: false,
    messagePreviewLength: '103',
    isEven: false,
    messageTokens: [
      { tokenType: TokenType.Punctuation, tokenText: '{' },
      { tokenType: TokenType.JsonPropertyValueString, tokenText: '"id"' },
      { tokenType: TokenType.Punctuation, tokenText: ':' },
      { tokenType: TokenType.Numeric, tokenText: '1' },
      { tokenType: TokenType.Punctuation, tokenText: ',' },
      { tokenType: TokenType.JsonPropertyValueString, tokenText: '"method"' },
      { tokenType: TokenType.Punctuation, tokenText: ':' },
      { tokenType: TokenType.JsonPropertyValueString, tokenText: '"test"' },
      { tokenType: TokenType.Punctuation, tokenText: ',' },
      { tokenType: TokenType.JsonPropertyValueString, tokenText: '"params"' },
      { tokenType: TokenType.Punctuation, tokenText: ':' },
      { tokenType: TokenType.Punctuation, tokenText: '[' },
      { tokenType: TokenType.JsonPropertyValueString, tokenText: `"${longString}...` },
    ],
  }
  expect(getMessageVirtualDom(message)).toEqual([
    {
      type: VirtualDomElements.Tr,
      className: 'TableRow TableRowOdd',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 1,
    },
    {
      childCount: 13,
      className: 'IframeInspectorCode',
      type: VirtualDomElements.Code,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '{',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token JsonPropertyValueString',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"id"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ':',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Numeric',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '1',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ',',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token JsonPropertyValueString',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"method"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ':',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token JsonPropertyValueString',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"test"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ',',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token JsonPropertyValueString',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"params"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ':',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token Punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '[',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token JsonPropertyValueString',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: `"${longString}...`,
      childCount: 0,
    },
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 1,
    },
    {
      childCount: 1,
      className: 'Token Numeric',
      type: 8,
    },
    {
      type: VirtualDomElements.Text,
      text: '103',
      childCount: 0,
    },
  ])
})
