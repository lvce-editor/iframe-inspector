import type { Message } from '../Message/Message.ts'
import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import * as CreateMessageViewModel from '../CreateMessageViewModel/CreateMessageViewModel.ts'

export const createMessageViewModels = (messages: readonly Message[], selectedIndex: number, maxLength: number): readonly MessageViewModel[] => {
  const viewModels: MessageViewModel[] = []
  for (let i = 0; i < messages.length; i++) {
    viewModels.push(CreateMessageViewModel.createMessageViewModel(messages[i], maxLength, i, selectedIndex))
  }
  return viewModels
}
