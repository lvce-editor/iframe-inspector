import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as ParentRpc from '../ParentRpc/ParentRpc.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handleFocus = async (uid: number): Promise<void> => {
  const { newState } = IframeInspectorViewStates.get(uid)
  // Don't set focus if it's coming from the input
  if (newState.inputSource === 1) {
    return
  }
  await ParentRpc.invoke('Focus.setFocus', WhenExpression.FocusIframeInspector)
  if (newState.isFocused) {
    return
  }
  const updatedState: IframeInspectorState = {
    ...newState,
    isFocused: true,
    focusId: FocusId.Input,
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
}
