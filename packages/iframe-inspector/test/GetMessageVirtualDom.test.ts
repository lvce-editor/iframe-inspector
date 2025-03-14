import { expect, test } from '@jest/globals'
import type { MessageViewModel } from '../src/parts/MessageViewModel/MessageViewModel.ts'
import * as GetMessageVirtualDom from '../src/parts/GetMessageVirtualDom/GetMessageVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getMessageVirtualDom - not selected', () => {
  const message: MessageViewModel = {
    id: 1,
    method: 'test',
    params: [],
    isSelected: false,
    messagePreview: '{"id":1,"method":"test","params":[]}',
    messagePreviewLength: '36',
  }
  expect(GetMessageVirtualDom.getMessageVirtualDom(message)).toEqual([
    {
      type: VirtualDomElements.Div,
      className: 'IframeInspectorMessage',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Pre,
      className: 'InspectorMessageData',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '{"id":1,"method":"test","params":[]}',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: 'InspectorMessageLength',
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
    id: 1,
    method: 'test',
    params: [],
    isSelected: true,
    messagePreview: '{"id":1,"method":"test","params":[]}',
    messagePreviewLength: '36',
  }
  expect(GetMessageVirtualDom.getMessageVirtualDom(message)).toEqual([
    {
      type: VirtualDomElements.Div,
      className: 'IframeInspectorMessage IframeInspectorMessageSelected',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Pre,
      className: 'InspectorMessageData',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '{"id":1,"method":"test","params":[]}',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: 'InspectorMessageLength',
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
  const message: MessageViewModel = {
    id: 1,
    method: 'test',
    params: ['a'.repeat(200)],
    isSelected: false,
    messagePreview: '{"id":1,"method":"test","params":["' + 'a'.repeat(65) + '...',
    messagePreviewLength: '103',
  }
  expect(GetMessageVirtualDom.getMessageVirtualDom(message)).toEqual([
    {
      type: VirtualDomElements.Div,
      className: 'IframeInspectorMessage',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Pre,
      className: 'InspectorMessageData',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '{"id":1,"method":"test","params":["' + 'a'.repeat(65) + '...',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Div,
      className: 'InspectorMessageLength',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: '103',
      childCount: 0,
    },
  ])
})
