import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'

export const handleHome = (state: IframeInspectorState): IframeInspectorState => {
  return SelectIndex.selectIndex(state, 0)
}
