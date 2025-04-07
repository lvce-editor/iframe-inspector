import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as FocusId from '../FocusId/FocusId.ts'

export const selectIndex = (newState: IframeInspectorState, index: number): IframeInspectorState => {
  const updatedState: IframeInspectorState = {
    ...newState,
    selectedIndex: index,
    isFocused: true,
    focusId: FocusId.List,
  }
  return updatedState
}
