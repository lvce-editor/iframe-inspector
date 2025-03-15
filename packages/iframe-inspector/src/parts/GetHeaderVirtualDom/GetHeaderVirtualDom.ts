import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getHeaderVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.THead,
      className: ClassNames.IframeInspectorHeader,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Tr,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Th,
      className: ClassNames.IframeInspectorHeaderData,
      childCount: 1,
    },
    text('Data'),
    {
      type: VirtualDomElements.Th,
      className: ClassNames.IframeInspectorHeaderLength,
      childCount: 1,
    },
    text('Length'),
  ]
}
