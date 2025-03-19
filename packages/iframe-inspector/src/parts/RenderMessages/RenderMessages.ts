import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as CreateMessageViewModels from '../CreateMessageViewModels/CreateMessageViewModels.ts'
import * as CreateSelectedMessageViewModel from '../CreateSelectedMessageViewModel/CreateSelectedMessageViewModel.ts'
import * as GetIframeInspectorVirtualDom from '../GetIframeInspectorVirtualDom/GetIframeInspectorVirtualDom.ts'
import * as MessageState from '../MessageState/MessageState.ts'

export const renderMessage = (oldState: IframeInspectorState, newState: IframeInspectorState): readonly any[] => {
  const messages = MessageState.getMessages()
  const maxLength = 100
  const viewModels = CreateMessageViewModels.createMessageViewModels(messages, newState.selectedIndex, maxLength, newState.filterText)
  const selectedModel = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, newState.selectedIndex, newState.expandedPaths)
  const dom = GetIframeInspectorVirtualDom.getIframeInspectorVirtualDom(viewModels, selectedModel, newState.selectedIndex, newState.columnWidths)
  return ['Viewlet.setDom2', dom]
}
