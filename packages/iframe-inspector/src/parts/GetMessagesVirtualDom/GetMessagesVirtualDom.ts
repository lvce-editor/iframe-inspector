import type { Message } from '../Message/Message.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as GetMessageVirtualDom from '../GetMessageVirtualDom/GetMessageVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getMessagesVirtualDom = (messages: readonly Message[]): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: 'IframeInspectorMessages',
      childCount: messages.length,
    },
    ...messages.flatMap(GetMessageVirtualDom.getMessageVirtualDom),
  ]
}
