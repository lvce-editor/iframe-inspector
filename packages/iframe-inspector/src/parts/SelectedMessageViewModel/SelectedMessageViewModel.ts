export interface SelectedMessageKeyValuePair {
  readonly depth: number
  readonly isExpandable: boolean
  readonly isExpanded: boolean
  readonly key: string
  readonly path: string
  readonly stringifiedValue: string
  readonly value: any
}

export interface SelectedMessageViewModel {
  readonly pairs: readonly SelectedMessageKeyValuePair[]
}
