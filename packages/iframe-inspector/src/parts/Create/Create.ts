import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const create = (uid: number, x: number, y: number, width: number, height: number): void => {
  const state: IframeInspectorState = {
    messages: [],
    uid,
    messageVersion: 0,
    selectedIndex: -1,
    x,
    y,
    width,
    height,
    headerHeight: 20,
  }
  IframeInspectorViewStates.set(uid, state, state)
}
