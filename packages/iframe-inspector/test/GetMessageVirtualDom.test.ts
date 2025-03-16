import { expect, test } from '@jest/globals'
import type { MessageViewModel } from '../src/parts/MessageViewModel/MessageViewModel.ts'
import * as GetMessageVirtualDom from '../src/parts/GetMessageVirtualDom/GetMessageVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getMessageVirtualDom - not selected', () => {
  const message: MessageViewModel = {
    isSelected: false,
    messagePreview: '{"id":1,"method":"test","params":[]}',
    messagePreviewLength: '36',
    isEven: false,
    messageRaw: {},
    messageTokens: [
      'punctuation',
      '{',
      'string',
      '"id"',
      'punctuation',
      ':',
      'number',
      '1',
      'punctuation',
      ',',
      'string',
      '"method"',
      'punctuation',
      ':',
      'string',
      '"test"',
      'punctuation',
      ',',
      'string',
      '"params"',
      'punctuation',
      ':',
      'punctuation',
      '[',
      'punctuation',
      ']',
      'punctuation',
      '}',
    ],
  }
  expect(GetMessageVirtualDom.getMessageVirtualDom(message)).toEqual([
    {
      type: VirtualDomElements.Tr,
      className: 'TableRow TableRowOdd',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 14,
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
      text: ',',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token string',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"method"',
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
      className: 'Token string',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"test"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ',',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token string',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"params"',
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
      className: 'Token punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '[',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ']',
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
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 1,
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
    messagePreview: '{"id":1,"method":"test","params":[]}',
    messagePreviewLength: '36',
    isEven: false,
    messageRaw: {},
    messageTokens: [
      'punctuation',
      '{',
      'string',
      '"id"',
      'punctuation',
      ':',
      'number',
      '1',
      'punctuation',
      ',',
      'string',
      '"method"',
      'punctuation',
      ':',
      'string',
      '"test"',
      'punctuation',
      ',',
      'string',
      '"params"',
      'punctuation',
      ':',
      'punctuation',
      '[',
      'punctuation',
      ']',
      'punctuation',
      '}',
    ],
  }
  expect(GetMessageVirtualDom.getMessageVirtualDom(message)).toEqual([
    {
      type: VirtualDomElements.Tr,
      className: 'TableRow TableRowSelected TableRowOdd',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 14,
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
      text: ',',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token string',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"method"',
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
      className: 'Token string',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"test"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ',',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token string',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"params"',
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
      className: 'Token punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '[',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ']',
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
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 1,
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
    messagePreview: `{"id":1,"method":"test","params":["${longString}...`,
    messagePreviewLength: '103',
    isEven: false,
    messageRaw: {},
    messageTokens: [
      'punctuation',
      '{',
      'string',
      '"id"',
      'punctuation',
      ':',
      'number',
      '1',
      'punctuation',
      ',',
      'string',
      '"method"',
      'punctuation',
      ':',
      'string',
      '"test"',
      'punctuation',
      ',',
      'string',
      '"params"',
      'punctuation',
      ':',
      'punctuation',
      '[',
      'string',
      `"${longString}...`,
    ],
  }
  expect(GetMessageVirtualDom.getMessageVirtualDom(message)).toEqual([
    {
      type: VirtualDomElements.Tr,
      className: 'TableRow TableRowOdd',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Td,
      className: 'TableCell',
      childCount: 13,
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
      text: ',',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token string',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"method"',
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
      className: 'Token string',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"test"',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: ',',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token string',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '"params"',
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
      className: 'Token punctuation',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '[',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Span,
      className: 'Token string',
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
      type: VirtualDomElements.Text,
      text: '103',
      childCount: 0,
    },
  ])
})
