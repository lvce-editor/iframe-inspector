import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListeners from '../DomEventListeners/DomEventListeners.ts'
import * as GetMessageVirtualDom from '../GetMessageVirtualDom/GetMessageVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getMessagesVirtualDom = (messages: readonly MessageViewModel[]): readonly VirtualDomNode[] => {
  return [
    {
      childCount: messages.length,
      className: ClassNames.TableBody,
      onPointerDown: DomEventListeners.HandleClick,
      type: VirtualDomElements.TBody,
    },
    ...messages.flatMap(GetMessageVirtualDom.getMessageVirtualDom),
  ]
}
