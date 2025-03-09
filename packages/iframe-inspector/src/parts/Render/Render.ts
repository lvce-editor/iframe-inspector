import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as Diff from '../Diff/Diff.ts'

export const doRender = (oldState: IframeInspectorState, newState: IframeInspectorState): readonly any[] => {
  const diffResult = Diff.diff(oldState, newState)
  return ApplyRender.applyRender(oldState, newState, diffResult)
}
