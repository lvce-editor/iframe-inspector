import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getHeaderVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: 'IframeInspectorHeader',
      childCount: 2,
    },
    {
      type: VirtualDomElements.Div,
      className: 'IframeInspectorHeaderData',
      childCount: 1,
    },
    text('Data'),
    {
      type: VirtualDomElements.Div,
      className: 'IframeInspectorHeaderLength',
      childCount: 1,
    },
    text('Length'),
  ]
}
