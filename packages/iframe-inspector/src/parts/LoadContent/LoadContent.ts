import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as RegisterInterceptor from '../RegisterInterceptor/RegisterInterceptor.ts'

export const loadContent = async (uid: number): Promise<void> => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const updated: IframeInspectorState = {
    ...newState,
    messageVersion: 1,
  }
  IframeInspectorViewStates.set(uid, newState, updated)
  await RegisterInterceptor.registerInterceptor()
}
