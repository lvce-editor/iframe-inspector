import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetResizerVirtualDom from '../GetResizerVirtualDom/GetResizerVirtualDom.ts'
import * as GetSelectedContentVirtualDom from '../GetSelectedContentVirtualDom/GetSelectedContentVirtualDom.ts'
import * as GetTableVirtualDom from '../GetTableVirtualDom/GetTableVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getIframeInspectorVirtualDom = (messages: readonly MessageViewModel[], selectedIndex: number): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.IFrameInspector),
      childCount: 3,
    },
    ...GetTableVirtualDom.getTableVirtualDom(messages),
    ...GetResizerVirtualDom.getResizerVirtualDom(),
    ...GetSelectedContentVirtualDom.getSelectedContentVirtualDom(messages, selectedIndex),
  ]
}
