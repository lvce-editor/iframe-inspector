import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const handleBlur = (uid: number): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const updatedState: IframeInspectorState = {
    ...newState,
    selectedIndex: -1,
    inputSource: undefined,
  }
  IframeInspectorViewStates.set(uid, newState, updatedState)
}
