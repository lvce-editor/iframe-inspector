import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as GetIframeInspectorVirtualDom from '../GetIframeInspectorVirtualDom/GetIframeInspectorVirtualDom.ts'
import * as MessageState from '../MessageState/MessageState.ts'

export const renderMessage = (oldState: IframeInspectorState, newState: IframeInspectorState): readonly any[] => {
  const messages = MessageState.getMessages()
  const dom = GetIframeInspectorVirtualDom.getIframeInspectorVirtualDom(messages, newState.selectedIndex)
  return ['Viewlet.setDom2', dom]
}
