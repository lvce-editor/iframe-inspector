import type { Message } from '../Message/Message.ts'
import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import * as GetMessagePreview from '../GetMessagePreview/GetMessagePreview.ts'
import * as TokenizeJson from '../TokenizeJson/TokenizeJson.ts'

export const createMessageViewModel = (
  message: Message,
  maxLength: number,
  index: number,
  selectedIndex: number,
  isListFocused: boolean,
): MessageViewModel => {
  const stringified = JSON.stringify(message)
  const preview = GetMessagePreview.getMessagePreview(stringified, maxLength)
  const tokens = TokenizeJson.tokenizeJson(preview)
  return {
    isEven: index % 2 === 0,
    isSelected: isListFocused && index === selectedIndex,
    messagePreviewLength: String(preview.length),
    messageTokens: tokens,
  }
}
