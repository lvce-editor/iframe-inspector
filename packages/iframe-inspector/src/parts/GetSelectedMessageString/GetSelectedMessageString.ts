import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'

export const getSelectedMessageString = (messages: readonly MessageViewModel[], selectedIndex: number): string => {
  if (selectedIndex === -1) {
    return ''
  }
  const selectedMessage = messages[selectedIndex]
  const { messageRaw } = selectedMessage
  const stringified = JSON.stringify(messageRaw, null, 2)
  return stringified
}
