export interface MessageViewModel {
  readonly id: number
  readonly method: string
  readonly params: readonly any[]
  readonly isSelected: boolean
  readonly messagePreview: string
  readonly messagePreviewLength: string
  readonly isEven: boolean
}
