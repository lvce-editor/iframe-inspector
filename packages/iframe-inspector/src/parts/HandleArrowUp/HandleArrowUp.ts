import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'

export const handleArrowUp = (newState: IframeInspectorState): IframeInspectorState => {
  const nextIndex = Math.max(0, newState.selectedIndex - 1)
  return SelectIndex.selectIndex(newState, nextIndex)
}
