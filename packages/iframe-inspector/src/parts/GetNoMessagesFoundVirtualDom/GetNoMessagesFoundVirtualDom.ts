import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as IframeInspectorStrings from '../IframeInspectorStrings/IframeInspectorStrings.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getNoMessagesFoundVirtualDom = (): readonly VirtualDomNode[] => {
  const noMessagesFound = IframeInspectorStrings.noMessagesAvailable()
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.IframeInspectorNoMessagesFound,
      childCount: 1,
    },
    text(noMessagesFound),
  ]
}
