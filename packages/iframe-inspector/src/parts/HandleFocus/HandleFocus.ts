import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import * as SetFocus from '../SetFocus/SetFocus.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const handleFocus = async (newState: IframeInspectorState, inputName: string): Promise<IframeInspectorState> => {
  console.log({ inputName })
  // Don't set focus if it's coming from the input
  await SetFocus.setFocus(WhenExpression.FocusIframeInspector)
  if (newState.isFocused && newState.focusId === FocusId.Input) {
    return newState
  }
  console.log('handle focus')
  const updatedState: IframeInspectorState = {
    ...newState,
    isFocused: true,
    focusId: FocusId.Input,
  }
  return updatedState
}
