import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const handleClick = (uid: number, eventX: number, eventY: number): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const { headerHeight } = newState
  const actualY = eventY - headerHeight

  // @ts-ignore abcdef

  globalThis.act = actualY

  // TODO
}
