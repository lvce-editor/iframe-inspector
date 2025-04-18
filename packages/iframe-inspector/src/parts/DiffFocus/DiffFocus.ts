import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const diffType = DiffType.RenderFocus

export const isEqual = (oldState: IframeInspectorState, newState: IframeInspectorState): boolean => {
  return oldState.isFocused === newState.isFocused && oldState.focusId === newState.focusId
}
