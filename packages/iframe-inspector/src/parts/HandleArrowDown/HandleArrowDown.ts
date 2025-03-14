import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as MessageState from '../MessageState/MessageState.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'

export const handleArrowDown = (uid: number): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const messages = MessageState.getMessages()
  const nextIndex = Math.min(messages.length - 1, newState.selectedIndex + 1)
  SelectIndex.selectIndex(uid, nextIndex)
}
