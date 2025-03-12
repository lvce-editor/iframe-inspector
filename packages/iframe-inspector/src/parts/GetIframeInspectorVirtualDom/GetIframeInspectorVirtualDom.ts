import type { Message } from '../Message/Message.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetMessagesVirtualDom from '../GetMessagesVirtualDom/GetMessagesVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getIframeInspectorVirtualDom = (messages: readonly Message[]): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.IFrameInspector),
      childCount: 1,
    },
    ...GetMessagesVirtualDom.getMessagesVirtualDom(messages),
  ]
}
