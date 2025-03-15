import type { Message } from '../Message/Message.ts'
import type { SelectedMessageViewModel } from '../SelectedMessageViewModel/SelectedMessageViewModel.ts'

export const createSelectedMessageViewModel = (messages: readonly Message[], selectedIndex: number): SelectedMessageViewModel => {
  if (selectedIndex === -1) {
    return {
      pairs: [],
    }
  }
  const message = messages[selectedIndex]
  const entries = Object.entries(message)
  const pairs: SelectedMessageViewModel['pairs'] = entries.map(([key, value]: readonly [string, any]) => {
    return {
      key,
      value,
      stringifiedValue: JSON.stringify(value),
    }
  })
  return {
    pairs,
  }
}
