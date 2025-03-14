import type { Message } from '../Message/Message.ts'
import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import * as GetMessagePreview from '../GetMessagePreview/GetMessagePreview.ts'

export const createMessageViewModel = (messages: readonly Message[], selectedIndex: number): readonly MessageViewModel[] => {
  return messages.map((message, index) => {
    const preview = GetMessagePreview.getMessagePreview(message)
    return {
      ...message,
      isSelected: index === selectedIndex,
      messagePreview: preview,
      messagePreviewLength: String(preview.length),
    }
  })
}
