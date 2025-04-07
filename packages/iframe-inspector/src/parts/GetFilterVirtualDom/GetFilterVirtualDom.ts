import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListeners from '../DomEventListeners/DomEventListeners.ts'
import * as IframeInspectorStrings from '../IframeInspectorStrings/IframeInspectorStrings.ts'
import * as InputName from '../InputName/InputName.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getFilterVirtualDom = (): readonly VirtualDomNode[] => {
  const placeholder = IframeInspectorStrings.filterMessages()
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.FilterSection,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: ClassNames.SearchField,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Input,
      className: ClassNames.FilterInput,
      placeholder,
      onInput: DomEventListeners.HandleFilterInput,
      onFocus: DomEventListeners.HandleFocus,
      name: InputName.IframeInspectorFilterInput,
    },
  ]
}
