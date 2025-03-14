import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'

export const handleArrowUp = (uid: number): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const nextIndex = Math.max(0, newState.selectedIndex - 1)
  SelectIndex.selectIndex(uid, nextIndex)
}
