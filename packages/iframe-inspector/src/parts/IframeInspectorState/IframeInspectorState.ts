import type { Message } from '../Message/Message.ts'

export interface IframeInspectorState {
  readonly columnWidths: readonly string[]
  readonly deltaY: number
  readonly expandedPaths: readonly string[]
  readonly filterHeight: number
  readonly filterText: string
  readonly finalDeltaY: number
  readonly focusId: number
  readonly headerHeight: number
  readonly height: number
  readonly inputSource?: number
  readonly isFocused: boolean
  readonly isResizing: boolean
  readonly itemHeight: number
  readonly maxLineY: number
  readonly maxMessageLength: number
  readonly messages: readonly Message[]
  readonly messagesHeight: number
  readonly messageVersion: number
  readonly minLineY: number
  readonly resizeStartHeight: number
  readonly resizeStartY: number
  readonly selectedContentItemHeight: number
  readonly selectedIndex: number
  readonly uid: number
  readonly width: number
  readonly x: number
  readonly y: number
}
