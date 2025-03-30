import { expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as RenderHeights from '../src/parts/RenderHeights/RenderHeights.ts'

test('renderHeights', () => {
  const defaultState = CreateDefaultState.createDefaultState()
  const oldState: IframeInspectorState = {
    ...defaultState,
    messageVersion: 1,
    messagesHeight: 100,
  }

  const newState: IframeInspectorState = {
    ...defaultState,
    messageVersion: 1,
    messagesHeight: 200,
  }

  expect(RenderHeights.renderHeights(oldState, newState)).toEqual(['Viewlet.setMessagesHeight', 200])
})
