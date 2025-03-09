import type { Message } from '../Message/Message.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getMessageVirtualDom = (message: Message): readonly VirtualDomNode[] => {
  return [text(message.method)]
}
