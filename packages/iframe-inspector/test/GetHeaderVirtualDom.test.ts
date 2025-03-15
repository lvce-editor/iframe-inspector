import { expect, test } from '@jest/globals'
import * as GetHeaderVirtualDom from '../src/parts/GetHeaderVirtualDom/GetHeaderVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getHeaderVirtualDom', () => {
  expect(GetHeaderVirtualDom.getHeaderVirtualDom()).toEqual([
    {
      type: VirtualDomElements.THead,
      className: 'TableHead',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Tr,
      className: 'TableRow',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Th,
      className: 'TableCell',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: 'Data',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Th,
      className: 'TableCell',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Text,
      text: 'Length',
      childCount: 0,
    },
  ])
})
