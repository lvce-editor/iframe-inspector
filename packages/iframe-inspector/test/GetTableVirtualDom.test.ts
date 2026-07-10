import { expect, test } from '@jest/globals'
import type { MessageViewModel } from '../src/parts/MessageViewModel/MessageViewModel.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetTableVirtualDom from '../src/parts/GetTableVirtualDom/GetTableVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getTableVirtualDom', () => {
  const mockMessages: MessageViewModel[] = [
    {
      isEven: true,
      isSelected: false,
      messagePreviewLength: '10',
      messageTokens: [],
    },
    {
      isEven: false,
      isSelected: true,
      messagePreviewLength: '20',
      messageTokens: [],
    },
  ]

  const columnWidths = ['auto', '50px']
  expect(GetTableVirtualDom.getTableVirtualDom(mockMessages, columnWidths)).toEqual([
    {
      childCount: 3,
      className: ClassNames.Table,
      type: VirtualDomElements.Table,
    },
    {
      childCount: 2,
      className: ClassNames.ColGroup,
      type: VirtualDomElements.ColGroup,
    },
    {
      childCount: 0,
      className: ClassNames.Col,
      type: VirtualDomElements.Col,
      width: 'auto',
    },
    {
      childCount: 0,
      className: ClassNames.Col,
      type: VirtualDomElements.Col,
      width: '50px',
    },
    {
      childCount: 1,
      className: ClassNames.TableHead,
      type: VirtualDomElements.THead,
    },
    {
      childCount: 2,
      className: ClassNames.TableRow,
      type: VirtualDomElements.Tr,
    },
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Th,
    },
    {
      childCount: 0,
      text: 'Data',
      type: 12,
    },
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Th,
    },
    {
      childCount: 0,
      text: 'Length',
      type: 12,
    },
    {
      childCount: 2,
      className: 'TableBody',
      onPointerDown: 'handleClick',
      type: 10,
    },
    {
      childCount: 2,
      className: 'TableRow TableRowEven',
      type: 15,
    },
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: 11,
    },
    {
      childCount: 0,
      className: ClassNames.IframeInspectorCode,
      type: 65,
    },
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: 11,
    },
    {
      childCount: 1,
      className: 'Token Numeric',
      type: 8,
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
      className: ClassNames.TableCell,
      type: 11,
    },
    {
      childCount: 0,
      className: ClassNames.IframeInspectorCode,
      type: 65,
    },
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: 11,
    },
    {
      childCount: 1,
      className: 'Token Numeric',
      type: 8,
    },
    {
      childCount: 0,
      text: '20',
      type: 12,
    },
  ])
})
