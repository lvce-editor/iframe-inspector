import { expect, test } from '@jest/globals'
import type { Message } from '../src/parts/Message/Message.ts'
import * as GetMessageVirtualDom from '../src/parts/GetMessageVirtualDom/GetMessageVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getMessageVirtualDom', () => {
  const message: Message = {
    id: 1,
    method: 'test',
    params: [],
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

test('getMessageVirtualDom - long message', () => {
  const message: Message = {
    id: 1,
    method: 'test',
    params: ['a'.repeat(200)],
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
