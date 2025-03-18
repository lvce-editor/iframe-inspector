import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetTableVirtualDom from '../GetTableVirtualDom/GetTableVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: ClassNames.TableWrapper,
  childCount: 2,
}

export const getTableWrapperVirtualDom = (messages: readonly MessageViewModel[], columnWidths: readonly string[]): readonly VirtualDomNode[] => {
  return [
    parentNode,
    {
      type: VirtualDomElements.Div,
      className: ClassNames.FilterSection,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Input,
      className: ClassNames.FilterInput,
      placeholder: 'Filter messages...',
      onInput: 'handleFilterInput',
    },
    {
      type: VirtualDomElements.Div,
      className: 'IframeInspectorGrid',
      role: 'application',
      tabIndex: 0,
      childCount: 1,
      onFocusIn: 'handleFocus',
      onBlur: 'handleBlur',
    },
    ...GetTableVirtualDom.getTableVirtualDom(messages, columnWidths),
  ]
}
