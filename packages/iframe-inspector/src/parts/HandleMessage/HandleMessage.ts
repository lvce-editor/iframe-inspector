import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as MessageState from '../MessageState/MessageState.ts'

// TODO remove event listener on dispose
export const handleMessage = (uid: number, data: any): void => {
  const actual = data.params[0]
  const message = typeof actual === 'string' ? { method: actual } : actual
  MessageState.addMessage(message)
  const { newState } = IframeInspectorViewStates.get(uid)
  const updatedState: IframeInspectorState = {
    ...newState,
    messageVersion: newState.messageVersion + 1,
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
  // TODO if view is visible, rerender
}
