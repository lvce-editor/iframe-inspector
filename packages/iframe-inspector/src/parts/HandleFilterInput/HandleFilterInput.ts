import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const handleFilterInput = (uid: number, filterText: string): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const updatedState: IframeInspectorState = {
    ...newState,
    filterText,
    inputSource: 1,
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
}
