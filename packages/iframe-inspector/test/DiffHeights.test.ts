import { expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as DiffHeights from '../src/parts/DiffHeights/DiffHeights.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'

test('diffType', () => {
  expect(DiffHeights.diffType).toBe(DiffType.RenderHeights)
})

test('isEqual - same height', () => {
  const oldState: IframeInspectorState = {
    messageVersion: 1,
    messages: [],
    uid: 1,
    selectedIndex: -1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    headerHeight: 0,
    itemHeight: 0,
    messagesHeight: 100,
    isResizing: false,
    resizeStartY: 0,
    resizeStartHeight: 0,
    expandedPaths: [],
    selectedContentItemHeight: 20,
    columnWidths: [],
    isFocused: false,
  }

  const newState: IframeInspectorState = {
    messageVersion: 1,
    messages: [],
    uid: 1,
    selectedIndex: -1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    headerHeight: 0,
    itemHeight: 0,
    messagesHeight: 100,
    isResizing: false,
    resizeStartY: 0,
    resizeStartHeight: 0,
    expandedPaths: [],
    selectedContentItemHeight: 20,
    columnWidths: [],
    isFocused: false,
  }

  expect(DiffHeights.isEqual(oldState, newState)).toBe(true)
})

test('isEqual - different height', () => {
  const oldState: IframeInspectorState = {
    messageVersion: 1,
    messages: [],
    uid: 1,
    selectedIndex: -1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    headerHeight: 0,
    itemHeight: 0,
    messagesHeight: 100,
    isResizing: false,
    resizeStartY: 0,
    resizeStartHeight: 0,
    expandedPaths: [],
    selectedContentItemHeight: 20,
    columnWidths: [],
    isFocused: false,
  }

  const newState: IframeInspectorState = {
    messageVersion: 1,
    messages: [],
    uid: 1,
    selectedIndex: -1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    headerHeight: 0,
    itemHeight: 0,
    messagesHeight: 200,
    isResizing: false,
    resizeStartY: 0,
    resizeStartHeight: 0,
    expandedPaths: [],
    selectedContentItemHeight: 20,
    columnWidths: [],
    isFocused: false,
  }

  expect(DiffHeights.isEqual(oldState, newState)).toBe(false)
})
