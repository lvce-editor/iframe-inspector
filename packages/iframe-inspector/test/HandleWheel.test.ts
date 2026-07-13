import { expect, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleWheel from '../src/parts/HandleWheel/HandleWheel.ts'
import * as IframeInspectorViewStates from '../src/parts/IframeInspectorViewStates/IframeInspectorViewStates.ts'

test('handleWheel', () => {
  const defaultState = CreateDefaultState.createDefaultState()
  IframeInspectorViewStates.set(defaultState.uid, defaultState, defaultState)

  HandleWheel.handleWheel(defaultState.uid, 50)
  const { newState } = IframeInspectorViewStates.get(defaultState.uid)
  expect(newState.y).toBe(50)
})
