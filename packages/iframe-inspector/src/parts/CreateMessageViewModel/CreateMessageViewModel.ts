import type { Message } from '../Message/Message.ts'
import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import * as GetMessagePreview from '../GetMessagePreview/GetMessagePreview.ts'
import * as TokenizeJson from '../TokenizeJson/TokenizeJson.ts'

const createSingleMessageViewModel = (message: Message, maxLength: number, index: number, selectedIndex: number): MessageViewModel => {
  const stringified = JSON.stringify(message)
  const preview = GetMessagePreview.getMessagePreview(stringified, maxLength)
  const tokens = TokenizeJson.tokenizeJson(preview)
  return {
    isSelected: index === selectedIndex,
    messagePreview: preview,
    messageRaw: message,
    messagePreviewLength: String(preview.length),
    isEven: index % 2 === 0,
    messageTokens: tokens,
  }
}

export const createMessageViewModel = (messages: readonly Message[], selectedIndex: number): readonly MessageViewModel[] => {
  const maxLength = 100
  return messages.map((message, index) => {
    return createSingleMessageViewModel(message, maxLength, index, selectedIndex)
  })
}
