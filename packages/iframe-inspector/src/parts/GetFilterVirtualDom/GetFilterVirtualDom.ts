import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListeners from '../DomEventListeners/DomEventListeners.ts'
import * as InputName from '../InputName/InputName.ts'
import * as Role from '../Role/Role.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getFilterVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.FilterSection,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Input,
      className: ClassNames.FilterInput,
      placeholder: 'Filter messages...',
      onInput: DomEventListeners.HandleFilterInput,
      name: InputName.IframeInspectorFilterInput,
    },
    {
      type: VirtualDomElements.Div,
      className: 'IframeInspectorGrid',
      role: Role.Application,
      tabIndex: 0,
      childCount: 1,
      onFocusIn: 'handleFocus',
      onBlur: 'handleBlur',
    },
  ]
}
