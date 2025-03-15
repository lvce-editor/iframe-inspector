import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as GetMessageVirtualDom from '../GetMessageVirtualDom/GetMessageVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getMessagesVirtualDom = (messages: readonly MessageViewModel[]): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.TBody,
      className: 'IframeInspectorMessages',
      childCount: messages.length,
      onClick: 'handleClick',
    },
    ...messages.flatMap(GetMessageVirtualDom.getMessageVirtualDom),
  ]
}
