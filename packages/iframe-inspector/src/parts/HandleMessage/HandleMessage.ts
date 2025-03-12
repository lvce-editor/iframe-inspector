import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

// TODO remove event listener on dispose
export const handleMessage = (uid: number, data: any): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const updatedState: IframeInspectorState = {
    ...newState,
    messages: [...newState.messages, data],
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
  // TODO if view is visible, rerender
}
