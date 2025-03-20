import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { SelectedMessageViewModel } from '../SelectedMessageViewModel/SelectedMessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetFilterVirtualDom from '../GetFilterVirtualDom/GetFilterVirtualDom.ts'
import * as GetResizerVirtualDom from '../GetResizerVirtualDom/GetResizerVirtualDom.ts'
import * as GetSelectedContentVirtualDom from '../GetSelectedContentVirtualDom/GetSelectedContentVirtualDom.ts'
import * as GetTableWrapperVirtualDom from '../GetTableWrapperVirtualDom/GetTableWrapperVirtualDom.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getIframeInspectorVirtualDom = (
  messages: readonly MessageViewModel[],
  selectedModel: SelectedMessageViewModel,
  selectedIndex: number,
  columnWidths: readonly string[],
): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(ClassNames.Viewlet, ClassNames.IFrameInspector),
      childCount: 4,
    },
    ...GetFilterVirtualDom.getFilterVirtualDom(),
    ...GetTableWrapperVirtualDom.getTableWrapperVirtualDom(messages, columnWidths),
    ...GetResizerVirtualDom.getResizerVirtualDom(),
    ...GetSelectedContentVirtualDom.getSelectedContentVirtualDom(selectedModel, selectedIndex),
  ]
}
