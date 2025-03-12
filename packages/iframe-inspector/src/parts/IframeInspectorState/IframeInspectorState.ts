import type { Message } from '../Message/Message.ts'

export interface IframeInspectorState {
  readonly messages: readonly Message[]
  readonly uid: number
  readonly messageVersion: number
  readonly selectedIndex: number
}
