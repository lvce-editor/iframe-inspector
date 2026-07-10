import type { Token } from '../Token/Token.ts'

export interface MessageViewModel {
  readonly isEven: boolean
  readonly isSelected: boolean
  readonly messagePreviewLength: string
  readonly messageTokens: readonly Token[]
}
