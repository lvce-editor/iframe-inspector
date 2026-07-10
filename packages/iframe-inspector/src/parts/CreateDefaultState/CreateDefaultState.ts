import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'

export const createDefaultState = (): IframeInspectorState => {
  const state: IframeInspectorState = {
    columnWidths: [],
    deltaY: 0,
    expandedPaths: [],
    filterHeight: 0,
    filterText: '',
    finalDeltaY: 0,
    focusId: 0,
    headerHeight: 0,
    height: 0,
    isFocused: false,
    isResizing: false,
    itemHeight: 0,
    maxLineY: 0,
    maxMessageLength: 100,
    messages: [],
    messagesHeight: 0,
    messageVersion: 0,
    minLineY: 0,
    resizeStartHeight: 0,
    resizeStartY: 0,
    selectedContentItemHeight: 20,
    selectedIndex: -1,
    uid: 1,
    width: 0,
    x: 0,
    y: 0,
  }

  return state
}
