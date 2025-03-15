import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const toggleExpand = (uid: number, path: string): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const newExpandedPaths = newState.expandedPaths.includes(path)
    ? newState.expandedPaths.filter((p) => p !== path)
    : [...newState.expandedPaths, path]

  const updatedState: IframeInspectorState = {
    ...newState,
    expandedPaths: newExpandedPaths,
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
}
