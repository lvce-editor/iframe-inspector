interface State {
  messages: readonly any[]
}

const state: State = {
  messages: [],
}

export const addMessage = (message: any): void => {
  const { messages } = state
  state.messages = [...messages, message]
}

export const getMessages = (): readonly any[] => {
  const { messages } = state
  return messages
}

export const reset = (): void => {
  state.messages = []
}
