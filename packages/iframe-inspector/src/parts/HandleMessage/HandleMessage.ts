import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as MessageState from '../MessageState/MessageState.ts'

// TODO remove event listener on dispose
export const handleMessage = (uid: number, data: any): void => {
  MessageState.addMessage(data)
  const { newState } = IframeInspectorViewStates.get(uid)
  const updatedState: IframeInspectorState = {
    ...newState,
    messageVersion: newState.messageVersion + 1,
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
  // TODO if view is visible, rerender
}
