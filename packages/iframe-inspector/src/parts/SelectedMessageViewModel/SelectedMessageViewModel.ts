export interface SelectedMessageKeyValuePair {
  readonly key: string
  readonly value: any
  readonly stringifiedValue: string
  readonly path: string
  readonly isExpandable: boolean
  readonly isExpanded: boolean
  readonly depth: number
}

export interface SelectedMessageViewModel {
  readonly pairs: readonly SelectedMessageKeyValuePair[]
}
