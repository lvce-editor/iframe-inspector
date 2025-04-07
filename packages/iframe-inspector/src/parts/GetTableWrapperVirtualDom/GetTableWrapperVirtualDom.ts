import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListeners from '../DomEventListeners/DomEventListeners.ts'
import * as GetNoMessagesFoundVirtualDom from '../GetNoMessagesFoundVirtualDom/GetNoMessagesFoundVirtualDom.ts'
import * as GetTableVirtualDom from '../GetTableVirtualDom/GetTableVirtualDom.ts'
import * as Role from '../Role/Role.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: ClassNames.TableWrapper,
  childCount: 1,
}

export const getTableWrapperVirtualDom = (messages: readonly MessageViewModel[], columnWidths: readonly string[]): readonly VirtualDomNode[] => {
  if (messages.length === 0) {
    return GetNoMessagesFoundVirtualDom.getNoMessagesFoundVirtualDom()
  }

  return [
    parentNode,
    {
      type: VirtualDomElements.Div,
      className: ClassNames.IframeInspectorGrid,
      role: Role.Application,
      tabIndex: 0,
      childCount: 1,
      onFocusIn: DomEventListeners.HandleListFocus,
      onBlur: DomEventListeners.HandleListBlur,
    },
    ...GetTableVirtualDom.getTableVirtualDom(messages, columnWidths),
  ]
}
