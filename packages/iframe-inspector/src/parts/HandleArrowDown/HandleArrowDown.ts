import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as MessageState from '../MessageState/MessageState.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'

export const handleArrowDown = (newState: IframeInspectorState): IframeInspectorState => {
  const messages = MessageState.getMessages()
  const nextIndex = Math.min(messages.length - 1, newState.selectedIndex + 1)
  return SelectIndex.selectIndex(newState, nextIndex)
}
