import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const handleFocus = (uid: number): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  if (newState.isFocused) {
    return
  }
  const updatedState: IframeInspectorState = {
    ...newState,
    isFocused: true,
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
}
