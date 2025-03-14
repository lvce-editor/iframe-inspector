import type { Message } from '../Message/Message.ts'
import * as GetMessagePreview from '../GetMessagePreview/GetMessagePreview.ts'

export interface MessageViewModel {
  readonly id: number
  readonly method: string
  readonly params: readonly any[]
  readonly isSelected: boolean
  readonly messagePreview: string
  readonly messagePreviewLength: number
}

export const createMessageViewModel = (messages: readonly Message[], selectedIndex: number): readonly MessageViewModel[] => {
  return messages.map((message, index) => {
    const preview = GetMessagePreview.getMessagePreview(message)
    return {
      ...message,
      isSelected: index === selectedIndex,
      messagePreview: preview,
      messagePreviewLength: preview.length,
    }
  })
}
