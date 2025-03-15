import { expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as RenderHeights from '../src/parts/RenderHeights/RenderHeights.ts'

test('renderHeights', () => {
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
  }
  expect(RenderHeights.renderHeights(oldState, newState)).toEqual(['Viewlet.setMessagesHeight', 200])
})
