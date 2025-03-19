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
  readonly messagesHeight: number
  readonly isResizing: boolean
  readonly resizeStartY: number
  readonly resizeStartHeight: number
  readonly expandedPaths: readonly string[]
  readonly selectedContentItemHeight: number
  readonly columnWidths: readonly string[]
  readonly isFocused: boolean
  readonly filterText: string
  readonly filterHeight: number
  readonly inputSource?: number
}
