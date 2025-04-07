import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as DiffType from '../DiffType/DiffType.ts'

export const diffType = DiffType.RenderItems

export const isEqual = (oldState: IframeInspectorState, newState: IframeInspectorState): boolean => {
  return (
    oldState.messageVersion === newState.messageVersion &&
    oldState.selectedIndex === newState.selectedIndex &&
    oldState.expandedPaths === newState.expandedPaths &&
    oldState.filterText === newState.filterText &&
    oldState.focusId === newState.focusId
  )
}
