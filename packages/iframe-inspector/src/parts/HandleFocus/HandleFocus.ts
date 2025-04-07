import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import * as ParentRpc from '../ParentRpc/ParentRpc.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handleFocus = async (newState: IframeInspectorState): Promise<IframeInspectorState> => {
  // Don't set focus if it's coming from the input
  if (newState.inputSource === 1) {
    return newState
  }
  await ParentRpc.invoke('Focus.setFocus', WhenExpression.FocusIframeInspector)
  if (newState.isFocused) {
    return newState
  }
  const updatedState: IframeInspectorState = {
    ...newState,
    isFocused: true,
    focusId: FocusId.Input,
  }
  return updatedState
}
