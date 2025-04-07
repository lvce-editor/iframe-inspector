import * as IframeInspectorStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const wrapCommand = (fn: any): any => {
  const wrapped = async (uid: number, ...args: readonly any[]): Promise<void> => {
    const { newState } = IframeInspectorStates.get(uid)
    const newerState = await fn(newState, ...args)
    if (newState === newerState) {
      return
    }
    IframeInspectorStates.set(uid, newState, newerState)
  }
  return wrapped
}
