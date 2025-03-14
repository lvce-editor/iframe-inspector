import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const handleClick = (uid: number, eventX: number, eventY: number): void => {
  console.log({ uid, eventX, eventY })

  const { newState } = IframeInspectorViewStates.get(uid)
  const { headerHeight } = newState
  const actualY = eventY - headerHeight
  console.log({ actualY })
  // TODO
}
