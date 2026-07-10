import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'

export const create = (uid: number, x: number, y: number, width: number, height: number): void => {
  const state: IframeInspectorState = {
    columnWidths: ['auto', '50px'],
    deltaY: 0,
    expandedPaths: [],
    filterHeight: 50,
    filterText: '',
    finalDeltaY: 0,
    focusId: 0,
    headerHeight: 20, // TODO make this configurable
    height,
    isFocused: false,
    isResizing: false,
    itemHeight: 24, // TODO make this configurable
    maxLineY: 0,
    maxMessageLength: 100,
    messages: [],
    messagesHeight: Math.floor(height * 0.6), // Add this - initially 60% height
    messageVersion: 0,
    minLineY: 0,
    resizeStartHeight: 0,
    resizeStartY: 0,
    selectedContentItemHeight: 20,
    selectedIndex: -1,
    uid,
    width,
    x,
    y,
  }
  IframeInspectorViewStates.set(uid, state, state)
}
