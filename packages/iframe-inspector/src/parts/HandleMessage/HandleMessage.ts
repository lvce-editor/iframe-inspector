import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as MessageState from '../MessageState/MessageState.ts'

// TODO remove event listener on dispose
export const handleMessage = (uid: number, data: any): void => {
  const actual = data.params[0]
  const message = typeof actual === 'string' ? { method: actual } : actual
  MessageState.addMessage(message)
  const keys = IframeInspectorViewStates.getKeys()
  for (const key of keys) {
    const { newState } = IframeInspectorViewStates.get(key)
    const updatedState: IframeInspectorState = {
      ...newState,
      messageVersion: newState.messageVersion + 1,
    }
    IframeInspectorViewStates.set(key, newState, updatedState)
  }
  // TODO if view is visible, rerender
}
