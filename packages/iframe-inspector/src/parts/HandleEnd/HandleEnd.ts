import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as MessageState from '../MessageState/MessageState.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'

export const handleEnd = (state: IframeInspectorState): IframeInspectorState => {
  const messages = MessageState.getMessages()
  return SelectIndex.selectIndex(state, Math.max(0, messages.length - 1))
}
