import type { Message } from '../Message/Message.ts'

export interface IframeInspectorState {
  readonly messages: readonly Message[]
  readonly uid: number
  readonly messageVersion: number
  readonly selectedIndex: number
  readonly headerHeight: number
  readonly x: number
  readonly y: number
  readonly width: number
  readonly height: number
  readonly itemHeight: number
}
