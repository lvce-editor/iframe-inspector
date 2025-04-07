import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const selectIndex = (uid: number, index: number): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const updatedState: IframeInspectorState = {
    ...newState,
    selectedIndex: index,
    isFocused: true,
    focusId: FocusId.List,
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
}
