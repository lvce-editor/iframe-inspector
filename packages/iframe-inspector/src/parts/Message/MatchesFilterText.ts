import type { Message } from './Message.ts'

export function matchesFilterText(message: Message, filterText: string): boolean {
  if (!filterText) {
    return true
  }
  const searchText = JSON.stringify(message).toLowerCase()
  return searchText.includes(filterText.toLowerCase())
}
