import type { Message } from '../Message/Message.ts'
import { matchesFilterText } from '../Message/MatchesFilterText.ts'

export const getFilteredMessages = (messages: readonly Message[], filterText: string): readonly Message[] => {
  return messages.filter((message) => matchesFilterText(message, filterText))
}
