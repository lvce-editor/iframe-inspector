import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const handleResizerMouseDown = (uid: number, clientY: number): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const updatedState = {
    ...newState,
    isResizing: true,
    resizeStartY: clientY,
    resizeStartHeight: newState.messagesHeight,
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
}

export const handleResizerMouseMove = (uid: number, clientY: number): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  if (!newState.isResizing) {
    return
  }
  const delta = clientY - newState.resizeStartY
  const newHeight = Math.max(50, Math.min(newState.height - 50, newState.resizeStartHeight + delta))
  const updatedState = {
    ...newState,
    messagesHeight: newHeight,
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
}

export const handleResizerMouseUp = (uid: number): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const updatedState = {
    ...newState,
    isResizing: false,
    resizeStartY: 0,
    resizeStartHeight: 0,
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
}
