import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as CreateMessageViewModel from '../CreateMessageViewModel/CreateMessageViewModel.ts'
import * as CreateSelectedMessageViewModel from '../CreateSelectedMessageViewModel/CreateSelectedMessageViewModel.ts'
import * as GetIframeInspectorVirtualDom from '../GetIframeInspectorVirtualDom/GetIframeInspectorVirtualDom.ts'
import * as MessageState from '../MessageState/MessageState.ts'

export const renderMessage = (oldState: IframeInspectorState, newState: IframeInspectorState): readonly any[] => {
  const messages = MessageState.getMessages()
  const viewModels = CreateMessageViewModel.createMessageViewModel(messages, newState.selectedIndex)
  const selectedModel = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, newState.selectedIndex, newState.expandedPaths)
  const dom = GetIframeInspectorVirtualDom.getIframeInspectorVirtualDom(viewModels, selectedModel, newState.selectedIndex)
  return ['Viewlet.setDom2', dom]
}
