import { beforeEach, expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as HandleHome from '../src/parts/HandleHome/HandleHome.ts'
import * as IframeInspectorViewStates from '../src/parts/IframeInspectorViewStates/IframeInspectorViewStates.ts'

beforeEach(() => {
  const state: IframeInspectorState = {
    messages: [],
    uid: 1,
    messageVersion: 0,
    selectedIndex: 5,
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

test('handleHome', () => {
  HandleHome.handleHome(1)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(0)
})
