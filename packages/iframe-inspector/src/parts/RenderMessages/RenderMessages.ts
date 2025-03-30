import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as CreateMessageViewModels from '../CreateMessageViewModels/CreateMessageViewModels.ts'
import * as CreateSelectedMessageViewModel from '../CreateSelectedMessageViewModel/CreateSelectedMessageViewModel.ts'
import * as GetFilteredMessages from '../GetFilteredMessages/GetFilteredMessages.ts'
import * as GetIframeInspectorVirtualDom from '../GetIframeInspectorVirtualDom/GetIframeInspectorVirtualDom.ts'
import * as MessageState from '../MessageState/MessageState.ts'

export const renderMessage = (oldState: IframeInspectorState, newState: IframeInspectorState): readonly any[] => {
  const messages = MessageState.getMessages()
  const filteredMessages = GetFilteredMessages.getFilteredMessages(messages, newState.filterText)
  const viewModels = CreateMessageViewModels.createMessageViewModels(
    filteredMessages,
    newState.selectedIndex,
    newState.maxMessageLength,
    newState.filterText,
  )
  const selectedModel = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, newState.selectedIndex, newState.expandedPaths)
  const dom = GetIframeInspectorVirtualDom.getIframeInspectorVirtualDom(viewModels, selectedModel, newState.selectedIndex, newState.columnWidths)
  return ['Viewlet.setDom2', dom]
}
