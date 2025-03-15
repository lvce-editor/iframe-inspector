import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'

export const getSelectedMessageString = (messages: readonly MessageViewModel[], selectedIndex: number): string => {
  if (selectedIndex === -1) {
    return ''
  }
  const selectedMessage = messages[selectedIndex]
  const stringified = JSON.stringify(selectedMessage, null, 2)
  return stringified
}
