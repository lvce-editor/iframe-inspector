import { expect, test } from '@jest/globals'
import * as GetHeaderVirtualDom from '../src/parts/GetHeaderVirtualDom/GetHeaderVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getHeaderVirtualDom', () => {
  expect(GetHeaderVirtualDom.getHeaderVirtualDom()).toEqual([
    {
      childCount: 1,
      className: 'TableHead',
      type: VirtualDomElements.THead,
    },
    {
      childCount: 2,
      className: 'TableRow',
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      childCount: 0,
      text: 'Data',
      type: VirtualDomElements.Text,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: VirtualDomElements.Th,
    },
    {
      childCount: 0,
      text: 'Length',
      type: VirtualDomElements.Text,
    },
  ])
})
