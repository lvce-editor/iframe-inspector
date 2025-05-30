import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const create = (uid: number, x: number, y: number, width: number, height: number): void => {
  const state: IframeInspectorState = {
    messages: [],
    uid,
    messageVersion: 0,
    selectedIndex: -1,
    x,
    y,
    width,
    height,
    headerHeight: 20, // TODO make this configurable
    itemHeight: 24, // TODO make this configurable
    messagesHeight: Math.floor(height * 0.6), // Add this - initially 60% height
    isResizing: false,
    resizeStartY: 0,
    resizeStartHeight: 0,
    expandedPaths: [],
    selectedContentItemHeight: 20,
    columnWidths: ['auto', '50px'],
    isFocused: false,
    filterText: '',
    filterHeight: 50,
    maxMessageLength: 100,
    minLineY: 0,
    maxLineY: 0,
    deltaY: 0,
    finalDeltaY: 0,
    focusId: 0,
  }
  IframeInspectorViewStates.set(uid, state, state)
}
