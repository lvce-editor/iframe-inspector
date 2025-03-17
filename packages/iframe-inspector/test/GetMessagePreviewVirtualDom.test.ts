import { expect, test } from '@jest/globals'
import * as GetMessagePreviewVirtualDom from '../src/parts/GetMessagePreviewVirtualDom/GetMessagePreviewVirtualDom.ts'
import * as TokenType from '../src/parts/TokenType/TokenType.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getMessagePreviewVirtualDom - with tokens', () => {
  const messageTokens = [
    TokenType.Punctuation,
    '{',
    TokenType.JsonPropertyValueString,
    '"id"',
    TokenType.Punctuation,
    ':',
    TokenType.Numeric,
    '1',
    TokenType.Punctuation,
    '}',
  ]
  expect(GetMessagePreviewVirtualDom.getMessagePreviewVirtualDom(messageTokens)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 5,
    },
    {
      type: VirtualDomElements.Span,
      className: `Token ${TokenType.Punctuation}`,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '{',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: `Token ${TokenType.JsonPropertyValueString}`,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"id"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: `Token ${TokenType.Punctuation}`,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ':',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: `Token ${TokenType.Numeric}`,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '1',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: `Token ${TokenType.Punctuation}`,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '}',
      childCount: 0,
    },
  ])
})

test('getMessagePreviewVirtualDom - empty tokens', () => {
  const messageTokens: string[] = []
  expect(GetMessagePreviewVirtualDom.getMessagePreviewVirtualDom(messageTokens)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 0,
    },
  ])
})
