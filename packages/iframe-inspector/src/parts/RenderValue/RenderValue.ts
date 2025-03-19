import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'

export const renderValue = (oldState: IframeInspectorState, newState: IframeInspectorState): readonly any[] => {
  return ['Viewlet.setValue', newState.filterText]
}
