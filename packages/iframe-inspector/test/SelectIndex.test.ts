import { beforeEach, expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as IframeInspectorViewStates from '../src/parts/IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as SelectIndex from '../src/parts/SelectIndex/SelectIndex.ts'

beforeEach(() => {
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
  }
  IframeInspectorViewStates.set(1, state, state)
})

test('selectIndex', () => {
  SelectIndex.selectIndex(1, 2)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(2)
  expect(newState.isFocused).toBe(true)
})

test('selectIndex - multiple updates', () => {
  SelectIndex.selectIndex(1, 2)
  SelectIndex.selectIndex(1, 3)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(3)
  expect(newState.isFocused).toBe(true)
})
