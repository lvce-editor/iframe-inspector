import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'

export const handleBlur = (newState: IframeInspectorState): IframeInspectorState => {
  const updatedState: IframeInspectorState = {
    ...newState,
    selectedIndex: -1,
    inputSource: undefined,
  }
  return updatedState
}
