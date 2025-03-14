import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetHeaderVirtualDom from '../GetHeaderVirtualDom/GetHeaderVirtualDom.ts'
import * as GetMessagesVirtualDom from '../GetMessagesVirtualDom/GetMessagesVirtualDom.ts'
import * as GetSelectedContentVirtualDom from '../GetSelectedContentVirtualDom/GetSelectedContentVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getIframeInspectorVirtualDom = (messages: readonly MessageViewModel[], selectedIndex: number): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.IFrameInspector),
      childCount: 4,
    },
    ...GetHeaderVirtualDom.getHeaderVirtualDom(),
    ...GetMessagesVirtualDom.getMessagesVirtualDom(messages),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.IframeInspectorResizer,
      childCount: 0,
      onMouseDown: 'handleResizerMouseDown',
    },
    ...GetSelectedContentVirtualDom.getSelectedContentVirtualDom(messages, selectedIndex),
  ]
}
