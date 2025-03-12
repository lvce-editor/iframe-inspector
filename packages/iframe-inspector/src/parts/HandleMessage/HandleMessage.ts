import * as MessageState from '../MessageState/MessageState.ts'

// TODO remove event listener on dispose
export const handleMessage = (uid: number, data: any): void => {
  MessageState.addMessage(data)
  // TODO if view is visible, rerender
}
