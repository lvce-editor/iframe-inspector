import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as GetIndex from '../GetIndex/GetIndex.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'

export const handleClick = (newState: IframeInspectorState, eventX: number, eventY: number): IframeInspectorState => {
  const { headerHeight, y, itemHeight, filterHeight } = newState
  const index = GetIndex.getIndex(headerHeight, y, eventY, itemHeight, filterHeight)
  return SelectIndex.selectIndex(newState, index)
}
