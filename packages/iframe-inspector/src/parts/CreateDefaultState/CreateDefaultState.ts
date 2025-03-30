import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'

export const createDefaultState = (): IframeInspectorState => {
  const state: IframeInspectorState = {
    messages: [],
    uid: 1,
    messageVersion: 0,
    selectedIndex: -1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    headerHeight: 0,
    itemHeight: 0,
    messagesHeight: 0,
    isResizing: false,
    resizeStartY: 0,
    resizeStartHeight: 0,
    expandedPaths: [],
    selectedContentItemHeight: 20,
    columnWidths: [],
    isFocused: false,
    filterText: '',
    filterHeight: 0,
    maxMessageLength: 100,
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
    finalDeltaY: 0,
  }

  return state
}
