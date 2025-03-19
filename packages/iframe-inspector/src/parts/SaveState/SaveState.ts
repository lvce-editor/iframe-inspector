import type { SavedState } from '../SavedState/SavedState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const saveState = (uid: number): SavedState => {
  const { newState } = IframeInspectorViewStates.get(uid)
  return {
    filterText: newState.filterText,
  }
}
