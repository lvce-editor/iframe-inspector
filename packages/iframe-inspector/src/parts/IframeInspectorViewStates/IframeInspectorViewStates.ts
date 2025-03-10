import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'

const states = Object.create(null)

export const get = (
  uid: number,
): {
  oldState: IframeInspectorState
  newState: IframeInspectorState
} => {
  return states[uid]
}

export const set = (uid: number, oldState: IframeInspectorState, newState: IframeInspectorState): void => {
  states[uid] = {
    oldState,
    newState,
  }
}
