import type { Token } from '../Token/Token.ts'

export interface MessageViewModel {
  readonly isSelected: boolean
  readonly messagePreview: string
  readonly messagePreviewLength: string
  readonly isEven: boolean
  readonly messageRaw: any
  readonly messageTokens: readonly Token[]
}
