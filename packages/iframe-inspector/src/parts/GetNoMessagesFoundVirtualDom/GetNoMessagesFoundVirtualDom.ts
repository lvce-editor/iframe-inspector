import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as IframeInspectorStrings from '../IframeInspectorStrings/IframeInspectorStrings.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const noMessagesFoundNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.IframeInspectorNoMessagesFound,
  type: VirtualDomElements.Div,
}

export const getNoMessagesFoundVirtualDom = (): readonly VirtualDomNode[] => {
  const noMessagesFound = IframeInspectorStrings.noMessagesAvailable()
  return [noMessagesFoundNode, text(noMessagesFound)]
}
