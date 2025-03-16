import type { Message } from '../Message/Message.ts'
import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import * as GetMessagePreview from '../GetMessagePreview/GetMessagePreview.ts'

export const createMessageViewModel = (messages: readonly Message[], selectedIndex: number): readonly MessageViewModel[] => {
  const maxLength = 100
  return messages.map((message, index) => {
    const stringified = JSON.stringify(message)
    const preview = GetMessagePreview.getMessagePreview(stringified, maxLength)
    return {
      isSelected: index === selectedIndex,
      messagePreview: preview,
      messageRaw: message,
      messagePreviewLength: String(preview.length),
      isEven: index % 2 === 0,
    }
  })
}
