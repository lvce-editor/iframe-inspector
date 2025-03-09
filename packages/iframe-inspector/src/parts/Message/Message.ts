export interface Message {
  readonly id: number
  readonly method: string
  readonly params: readonly any[]
}
