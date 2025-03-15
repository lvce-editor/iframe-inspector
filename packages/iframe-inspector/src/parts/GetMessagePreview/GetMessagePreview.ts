import type { Message } from '../Message/Message.ts'

export const getMessagePreview = (message: Message, maxLength: number): string => {
  const stringified = JSON.stringify(message)
  if (stringified.length < maxLength) {
    return stringified
  }
  const part = stringified.slice(0, maxLength)
  return part + '...'
}
