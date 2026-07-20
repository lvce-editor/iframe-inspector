import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetColGroupVirtualDom from '../GetColGroupVirtualDom/GetColGroupVirtualDom.ts'
import * as GetHeaderVirtualDom from '../GetHeaderVirtualDom/GetHeaderVirtualDom.ts'
import * as GetMessagesVirtualDom from '../GetMessagesVirtualDom/GetMessagesVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const tableNode: VirtualDomNode = {
  childCount: 3,
  className: ClassNames.Table,
  type: VirtualDomElements.Table,
}

export const getTableVirtualDom = (messages: readonly MessageViewModel[], columnWidths: readonly string[]): readonly VirtualDomNode[] => {
  return [
    tableNode,
    ...GetColGroupVirtualDom.getColGroupVirtualDom(columnWidths),
    ...GetHeaderVirtualDom.getHeaderVirtualDom(),
    ...GetMessagesVirtualDom.getMessagesVirtualDom(messages),
  ]
}
