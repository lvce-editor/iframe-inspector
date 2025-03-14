import * as MessageState from '../MessageState/MessageState.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'

export const handleEnd = (uid: number): void => {
  const messages = MessageState.getMessages()
  SelectIndex.selectIndex(uid, Math.max(0, messages.length - 1))
}
