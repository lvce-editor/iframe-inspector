import type { SelectedMessageViewModel } from '../SelectedMessageViewModel/SelectedMessageViewModel.ts'

export const createSelectedMessageViewModel = (selectedMessage: any): SelectedMessageViewModel => {
  if (!selectedMessage) {
    return {
      pairs: [],
    }
  }
  const entries = Object.entries(selectedMessage)
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
