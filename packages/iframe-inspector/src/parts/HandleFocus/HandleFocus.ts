import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as ParentRpc from '../ParentRpc/ParentRpc.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handleFocus = async (uid: number): Promise<void> => {
  const { newState } = IframeInspectorViewStates.get(uid)
  // TODO make focus handling more functional
  await ParentRpc.invoke('Focus.setFocus', WhenExpression.FocusIframeInspector)
  if (newState.isFocused) {
    return
  }
  const updatedState: IframeInspectorState = {
    ...newState,
    isFocused: true,
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
}
