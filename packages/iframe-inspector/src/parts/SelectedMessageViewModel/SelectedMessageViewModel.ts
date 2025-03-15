interface SelectedMessageKeyValuePair {
  readonly key: string
  readonly value: any
  readonly stringifiedValue: string
}

export interface SelectedMessageViewModel {
  readonly pairs: readonly SelectedMessageKeyValuePair[]
}
