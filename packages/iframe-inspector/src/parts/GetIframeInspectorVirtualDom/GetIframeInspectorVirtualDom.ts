import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { SelectedMessageViewModel } from '../SelectedMessageViewModel/SelectedMessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetFilterVirtualDom from '../GetFilterVirtualDom/GetFilterVirtualDom.ts'
import * as GetIframeInspectorBottomVirtualDom from '../GetIframeInspectorBottomVirtualDom/GetIframeInspectorBottomVirtualDom.ts'
import * as GetTableWrapperVirtualDom from '../GetTableWrapperVirtualDom/GetTableWrapperVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getIframeInspectorVirtualDom = (
  messages: readonly MessageViewModel[],
  selectedModel: SelectedMessageViewModel,
  selectedIndex: number,
  columnWidths: readonly string[],
): readonly VirtualDomNode[] => {
  const hasMessages = messages.length > 0
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.IFrameInspector),
      childCount: hasMessages ? 4 : 2,
    },
    ...GetFilterVirtualDom.getFilterVirtualDom(),
    ...GetTableWrapperVirtualDom.getTableWrapperVirtualDom(messages, columnWidths),
    ...GetIframeInspectorBottomVirtualDom.getIframeInspectorBottomVirtualDom(messages, selectedModel, selectedIndex),
  ]
}
