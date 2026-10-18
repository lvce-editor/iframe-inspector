import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const wrapCommand = IframeInspectorStates.wrapSerialCommand

export const wrapUidCommand = (fn: (uid: number, ...args: readonly any[]) => void): ReturnType<typeof wrapCommand> => {
  return wrapCommand((state: IframeInspectorState, ...args: readonly any[]) => {
    const { uid } = state
    fn(uid, ...args)
    return IframeInspectorStates.get(uid).newState
  })
}
