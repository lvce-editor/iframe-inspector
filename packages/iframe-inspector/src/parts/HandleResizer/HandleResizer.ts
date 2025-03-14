import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

let isDragging = false
let startY = 0
const startHeight = 0

export const handleResizerMouseDown = (uid: number, clientY: number): void => {
  isDragging = true
  startY = clientY
  // const { newState } = IframeInspectorViewStates.get(uid)
  // startHeight = newState.messagesHeight
  // document.addEventListener('mousemove', (e) => handleResizerMouseMove(uid, e.clientY))
  // document.addEventListener('mouseup', () => handleResizerMouseUp(uid))
}

export const handleResizerMouseMove = (uid: number, clientY: number): void => {
  if (!isDragging) {
    return
  }
  const { newState } = IframeInspectorViewStates.get(uid)
  const delta = clientY - startY
  const newHeight = Math.max(50, Math.min(newState.height - 50, startHeight + delta))
  const updatedState = {
    ...newState,
    messagesHeight: newHeight,
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
}

export const handleResizerMouseUp = (uid: number): void => {
  isDragging = false
  // document.removeEventListener('mousemove', (e) => handleResizerMouseMove(uid, e.clientY))
  // document.removeEventListener('mouseup', () => handleResizerMouseUp(uid))
}
