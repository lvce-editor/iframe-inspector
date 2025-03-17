import { expect, test } from '@jest/globals'
import type { Token } from '../src/parts/Token/Token.ts'
import { getMessagePreviewVirtualDom } from '../src/parts/GetMessagePreviewVirtualDom/GetMessagePreviewVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getMessagePreviewVirtualDom - not selected', () => {
  const messageTokens: readonly Token[] = [
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'JsonPropertyValueString', tokenText: '"id"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Numeric', tokenText: '1' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'JsonPropertyValueString', tokenText: '"method"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'JsonPropertyValueString', tokenText: '"test"' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'JsonPropertyValueString', tokenText: '"params"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Punctuation', tokenText: '[' },
    { tokenType: 'Punctuation', tokenText: ']' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ]
  expect(getMessagePreviewVirtualDom(messageTokens)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 14,
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

test('getMessagePreviewVirtualDom - selected', () => {
  const messageTokens: readonly Token[] = [
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'JsonPropertyValueString', tokenText: '"id"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Numeric', tokenText: '1' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'JsonPropertyValueString', tokenText: '"method"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'JsonPropertyValueString', tokenText: '"test"' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'JsonPropertyValueString', tokenText: '"params"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Punctuation', tokenText: '[' },
    { tokenType: 'Punctuation', tokenText: ']' },
    { tokenType: 'Punctuation', tokenText: '}' },
  ]
  expect(getMessagePreviewVirtualDom(messageTokens)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 14,
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

test('getMessagePreviewVirtualDom - long message', () => {
  const longString = 'a'.repeat(65)
  const messageTokens: readonly Token[] = [
    { tokenType: 'Punctuation', tokenText: '{' },
    { tokenType: 'JsonPropertyValueString', tokenText: '"id"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Numeric', tokenText: '1' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'JsonPropertyValueString', tokenText: '"method"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'JsonPropertyValueString', tokenText: '"test"' },
    { tokenType: 'Punctuation', tokenText: ',' },
    { tokenType: 'JsonPropertyValueString', tokenText: '"params"' },
    { tokenType: 'Punctuation', tokenText: ':' },
    { tokenType: 'Punctuation', tokenText: '[' },
    { tokenType: 'JsonPropertyValueString', tokenText: `"${longString}...` },
  ]
  expect(getMessagePreviewVirtualDom(messageTokens)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 13,
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
