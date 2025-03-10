import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const loadContent = (uid: number): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const updated: IframeInspectorState = {
    ...newState,
    messages: [
      {
        method: 'test',
        params: [],
        id: 1,
      },
    ],
  }
  IframeInspectorViewStates.set(uid, newState, updated)
}
