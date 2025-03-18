import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'

export const renderFocus = (oldState: IframeInspectorState, newState: IframeInspectorState): readonly any[] => {
  return ['Viewlet.focusSelector', '.IframeInspectorGrid']
}
