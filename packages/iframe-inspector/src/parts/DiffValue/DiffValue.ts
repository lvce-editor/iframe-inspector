import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const diffType = DiffType.RenderValue

export const isEqual = (oldState: IframeInspectorState, newState: IframeInspectorState): boolean => {
  return oldState.filterText === newState.filterText
}
