import { expect, test } from '@jest/globals'
import * as GetMessagePreviewVirtualDom from '../src/parts/GetMessagePreviewVirtualDom/GetMessagePreviewVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getMessagePreviewVirtualDom - with tokens', () => {
  const messagePreview = '{"id":1}'
  const messageTokens = ['punctuation', '{', 'string', '"id"', 'punctuation', ':', 'number', '1', 'punctuation', '}']
  expect(GetMessagePreviewVirtualDom.getMessagePreviewVirtualDom(messagePreview, messageTokens)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 5,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '{',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token string',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"id"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ':',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token number',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '1',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token punctuation',
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
  const messagePreview = '{}'
  const messageTokens: string[] = []
  expect(GetMessagePreviewVirtualDom.getMessagePreviewVirtualDom(messagePreview, messageTokens)).toEqual([
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 0,
    },
  ])
})
