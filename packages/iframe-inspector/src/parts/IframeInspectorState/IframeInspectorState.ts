import type { Message } from '../Message/Message.ts'

export interface IframeInspectorState {
  readonly messages: readonly Message[]
}
