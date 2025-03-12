import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const create = (uid: number): void => {
  const state: IframeInspectorState = {
    messages: [],
    uid,
    messageVersion: 0,
    selectedIndex: -1,
  }
  IframeInspectorViewStates.set(uid, state, state)
}
