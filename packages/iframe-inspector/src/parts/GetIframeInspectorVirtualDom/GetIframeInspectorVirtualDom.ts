import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetResizerVirtualDom from '../GetResizerVirtualDom/GetResizerVirtualDom.ts'
import * as GetSelectedContentVirtualDom from '../GetSelectedContentVirtualDom/GetSelectedContentVirtualDom.ts'
import * as GetTableWrapperVirtualDom from '../GetTableWrapperVirtualDom/GetTableWrapperVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const getSelectedString = (messages: readonly MessageViewModel[], selectedIndex: number): string => {
  if (selectedIndex === -1) {
    return ''
  }
  const selectedMessage = messages[selectedIndex]
  const stringified = JSON.stringify(selectedMessage, null, 2)
  return stringified
}

export const getIframeInspectorVirtualDom = (messages: readonly MessageViewModel[], selectedIndex: number): readonly VirtualDomNode[] => {
  const selectedMessageString = getSelectedString(messages, selectedIndex)
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.IFrameInspector),
      childCount: 3,
    },
    ...GetTableWrapperVirtualDom.getTableWrapperVirtualDom(messages),
    ...GetResizerVirtualDom.getResizerVirtualDom(),
    ...GetSelectedContentVirtualDom.getSelectedContentVirtualDom(selectedMessageString, selectedIndex),
  ]
}
