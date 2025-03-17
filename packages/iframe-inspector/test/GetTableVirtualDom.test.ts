import { expect, test } from '@jest/globals'
import type { MessageViewModel } from '../src/parts/MessageViewModel/MessageViewModel.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetTableVirtualDom from '../src/parts/GetTableVirtualDom/GetTableVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test.skip('getTableVirtualDom', () => {
  // Setup
  const mockMessages: MessageViewModel[] = [
    {
      isSelected: false,
      messagePreview: 'Message 1',
      messagePreviewLength: '10',
      isEven: true,
      messageRaw: { data: 'test1' },
      messageTokens: [],
    },
    {
      isSelected: true,
      messagePreview: 'Message 2',
      messagePreviewLength: '20',
      isEven: false,
      messageRaw: { data: 'test2' },
      messageTokens: [],
    },
  ]

  const columnWidths = ['auto', '50px']
  expect(GetTableVirtualDom.getTableVirtualDom(mockMessages, columnWidths)).toEqual([
    {
      type: VirtualDomElements.Table,
      className: ClassNames.Table,
      childCount: 2,
    },
    {
      type: VirtualDomElements.THead,
      className: ClassNames.TableHead,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Tr,
      className: ClassNames.TableRow,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Th,
      className: ClassNames.TableCell,
      childCount: 1,
    },
    {
      childCount: 0,
      text: 'Data',
      type: 12,
    },
    {
      type: VirtualDomElements.Th,
      className: ClassNames.TableCell,
      childCount: 1,
    },
    {
      childCount: 0,
      text: 'Length',
      type: 12,
    },
    {
      childCount: 2,
      className: 'TableBody',
      onClick: 'handleClick',
      type: 10,
    },
    {
      childCount: 2,
      className: 'TableRow TableRowEven',
      type: 15,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: 11,
    },
    {
      childCount: 0,
      text: 'Message 1',
      type: 12,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: 11,
    },
    {
      childCount: 0,
      text: '10',
      type: 12,
    },
    {
      childCount: 2,
      className: 'TableRow TableRowSelected TableRowOdd',
      type: 15,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: 11,
    },
    {
      childCount: 0,
      text: 'Message 2',
      type: 12,
    },
    {
      childCount: 1,
      className: 'TableCell',
      type: 11,
    },
    {
      childCount: 0,
      text: '20',
      type: 12,
    },
  ])
})
