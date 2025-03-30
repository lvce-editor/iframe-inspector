import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const handleWheel = (uid: number, deltaY: number): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const updatedState = {
    ...newState,
    y: Math.max(0, newState.y + deltaY),
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
}
