import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetTableVirtualDom from '../GetTableVirtualDom/GetTableVirtualDom.ts'
import * as Role from '../Role/Role.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: ClassNames.TableWrapper,
  childCount: 1,
}

const emptyMessagesNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: '',
  childCount: 1,
}

export const getTableWrapperVirtualDom = (messages: readonly MessageViewModel[], columnWidths: readonly string[]): readonly VirtualDomNode[] => {
  if (messages.length === 0) {
    return [emptyMessagesNode, text('No messages available')]
  }

  return [
    parentNode,
    {
      type: VirtualDomElements.Div,
      className: 'IframeInspectorGrid',
      role: Role.Application,
      tabIndex: 0,
      childCount: 1,
      onFocusIn: 'handleFocus',
      onBlur: 'handleBlur',
    },
    ...GetTableVirtualDom.getTableVirtualDom(messages, columnWidths),
  ]
}
