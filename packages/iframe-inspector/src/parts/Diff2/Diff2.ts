import * as Diff from '../Diff/Diff.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const diff2 = (uid: number): readonly number[] => {
  const { newState, oldState } = IframeInspectorViewStates.get(uid)
  const diffResult = Diff.diff(oldState, newState)
  return diffResult
}
