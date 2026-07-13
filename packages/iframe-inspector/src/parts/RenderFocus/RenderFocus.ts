import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as FocusId from '../FocusId/FocusId.ts'
import * as InputName from '../InputName/InputName.ts'

const getSelector = (focusId: number): string => {
  switch (focusId) {
    case FocusId.Input:
      return InputName.IframeInspectorFilterInput
    case FocusId.List:
      return '.IframeInspectorGrid'
    default:
      return ''
  }
}
export const renderFocus = (oldState: IframeInspectorState, newState: IframeInspectorState): readonly any[] => {
  const selector = getSelector(newState.focusId)
  return ['Viewlet.focusSelector', selector]
}
