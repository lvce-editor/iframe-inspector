import { expect, test } from '@jest/globals'
import * as GetHeaderVirtualDom from '../src/parts/GetHeaderVirtualDom/GetHeaderVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getHeaderVirtualDom', () => {
  expect(GetHeaderVirtualDom.getHeaderVirtualDom()).toEqual([
    {
      type: VirtualDomElements.THead,
      className: 'IframeInspectorHeader',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Tr,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Th,
      className: 'IframeInspectorHeaderData',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: 'Data',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Th,
      className: 'IframeInspectorHeaderLength',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: 'Length',
      childCount: 0,
    },
  ])
})
