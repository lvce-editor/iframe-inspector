import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { SelectedMessageViewModel } from '../SelectedMessageViewModel/SelectedMessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as GetResizerVirtualDom from '../GetResizerVirtualDom/GetResizerVirtualDom.ts'
import * as GetSelectedContentVirtualDom from '../GetSelectedContentVirtualDom/GetSelectedContentVirtualDom.ts'

export const getIframeInspectorBottomVirtualDom = (
  messages: readonly MessageViewModel[],
  selectedModel: SelectedMessageViewModel,
  selectedIndex: number,
): readonly VirtualDomNode[] => {
  if (messages.length === 0) {
    return []
  }
  return [...GetResizerVirtualDom.getResizerVirtualDom(), ...GetSelectedContentVirtualDom.getSelectedContentVirtualDom(selectedModel, selectedIndex)]
}
