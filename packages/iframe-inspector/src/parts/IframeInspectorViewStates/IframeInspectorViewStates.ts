import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'

const states = Object.create(null)

export const get = (
  uid: string | number,
): {
  oldState: IframeInspectorState
  newState: IframeInspectorState
} => {
  return states[uid]
}

export const getKeys = (): readonly string[] => {
  return Object.keys(states)
}

export const set = (uid: string | number, oldState: IframeInspectorState, newState: IframeInspectorState): void => {
  states[uid] = {
    oldState,
    newState,
  }
}
