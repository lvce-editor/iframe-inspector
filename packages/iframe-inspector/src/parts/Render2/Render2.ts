import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const render2 = (uid: number, diffResult: readonly number[]): readonly any[] => {
  const { oldState, newState } = IframeInspectorViewStates.get(uid)
  IframeInspectorViewStates.set(uid, newState, newState)
  const commands = ApplyRender.applyRender(oldState, newState, diffResult)
  return commands
}
