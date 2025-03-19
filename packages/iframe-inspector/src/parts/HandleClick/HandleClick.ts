import * as GetIndex from '../GetIndex/GetIndex.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'

export const handleClick = (uid: number, eventX: number, eventY: number): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const { headerHeight, y, itemHeight, filterHeight } = newState
  const index = GetIndex.getIndex(headerHeight, y, eventY, itemHeight, filterHeight)
  SelectIndex.selectIndex(uid, index)
}
