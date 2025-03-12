interface State {
  messages: readonly any[]
}

const state: State = {
  messages: [],
}

export const addMessage = (message: any): void => {
  state.messages = [...state.messages, message]
}

export const getMessages = (): readonly any[] => {
  return state.messages
}
