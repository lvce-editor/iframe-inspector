import type { Message } from '../Message/Message.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetMessagesVirtualDom from '../GetMessagesVirtualDom/GetMessagesVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getIframeInspectorVirtualDom = (messages: readonly Message[]): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.IFrameInspector),
      childCount: 2,
    },
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
    ...GetMessagesVirtualDom.getMessagesVirtualDom(messages),
  ]
}
