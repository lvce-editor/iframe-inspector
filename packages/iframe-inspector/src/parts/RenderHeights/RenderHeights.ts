import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'

export const renderHeights = (oldState: IframeInspectorState, newState: IframeInspectorState): readonly any[] => {
  return ['Viewlet.setMessagesHeight', newState.messagesHeight]
}
