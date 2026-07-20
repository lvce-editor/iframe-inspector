import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListeners from '../DomEventListeners/DomEventListeners.ts'
import * as IframeInspectorStrings from '../IframeInspectorStrings/IframeInspectorStrings.ts'
import * as InputName from '../InputName/InputName.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const filterSectionNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.FilterSection,
  type: VirtualDomElements.Div,
}

const searchFieldNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.SearchField,
  type: VirtualDomElements.Div,
}

export const getFilterVirtualDom = (): readonly VirtualDomNode[] => {
  const placeholder = IframeInspectorStrings.filterMessages()
  return [
    filterSectionNode,
    searchFieldNode,
    {
      className: ClassNames.FilterInput,
      name: InputName.IframeInspectorFilterInput,
      onFocus: DomEventListeners.HandleFocus,
      onInput: DomEventListeners.HandleFilterInput,
      placeholder,
      type: VirtualDomElements.Input,
    },
  ]
}
