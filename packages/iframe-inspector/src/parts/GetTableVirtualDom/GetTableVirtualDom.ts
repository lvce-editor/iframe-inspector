import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetHeaderVirtualDom from '../GetHeaderVirtualDom/GetHeaderVirtualDom.ts'
import * as GetMessagesVirtualDom from '../GetMessagesVirtualDom/GetMessagesVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getTableVirtualDom = (messages: readonly MessageViewModel[]): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Table,
      className: ClassNames.IframeInspectorTable,
      childCount: 2,
    },
    ...GetHeaderVirtualDom.getHeaderVirtualDom(),
    ...GetMessagesVirtualDom.getMessagesVirtualDom(messages),
  ]
}
