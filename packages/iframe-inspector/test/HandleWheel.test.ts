import { expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleWheel from '../src/parts/HandleWheel/HandleWheel.ts'

test('handleWheel', () => {
  const defaultState = CreateDefaultState.createDefaultState()
  const oldState: IframeInspectorState = {
    ...defaultState,
    y: 0,
  }

  const newState: IframeInspectorState = {
    ...defaultState,
    y: 100,
  }

  HandleWheel.handleWheel(1, 50)
  expect(newState.y).toBe(50)
})
