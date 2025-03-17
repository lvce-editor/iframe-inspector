import type { Token } from '../Token/Token.ts'

export interface MessageViewModel {
  readonly isSelected: boolean
  readonly messagePreviewLength: string
  readonly isEven: boolean
  readonly messageTokens: readonly Token[]
}
