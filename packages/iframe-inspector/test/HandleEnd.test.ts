import { beforeEach, expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as HandleEnd from '../src/parts/HandleEnd/HandleEnd.ts'
import * as IframeInspectorViewStates from '../src/parts/IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as MessageState from '../src/parts/MessageState/MessageState.ts'

beforeEach(() => {
  MessageState.reset()
  const state: IframeInspectorState = {
    messages: [],
    uid: 1,
    messageVersion: 0,
    selectedIndex: 0,
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
  }
  IframeInspectorViewStates.set(1, state, state)
})

test('handleEnd - no messages', () => {
  HandleEnd.handleEnd(1)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(0)
})

test('handleEnd - with messages', () => {
  MessageState.addMessage({ method: 'test1' })
  MessageState.addMessage({ method: 'test2' })
  HandleEnd.handleEnd(1)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(1)
})
