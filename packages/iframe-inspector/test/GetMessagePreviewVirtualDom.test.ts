import { expect, test } from '@jest/globals'
import type { Token } from '../src/parts/Token/Token.ts'
import { getMessagePreviewVirtualDom } from '../src/parts/GetMessagePreviewVirtualDom/GetMessagePreviewVirtualDom.ts'
import * as TokenType from '../src/parts/TokenType/TokenType.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getMessageVirtualDom - not selected', () => {
  const messageTokens: readonly Token[] = [
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
  ]
  expect(getMessagePreviewVirtualDom(messageTokens)).toEqual([
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
  ])
})

test('getMessageVirtualDom - selected', () => {
  const messageTokens: readonly Token[] = [
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
  ]
  expect(getMessagePreviewVirtualDom(messageTokens)).toEqual([
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
  ])
})

test('getMessageVirtualDom - long message', () => {
  const longString = 'a'.repeat(65)
  const messageTokens: readonly Token[] = [
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
  ]
  expect(getMessagePreviewVirtualDom(messageTokens)).toEqual([
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
  ])
})
