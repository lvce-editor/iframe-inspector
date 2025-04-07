import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleBlur from '../src/parts/HandleBlur/HandleBlur.ts'
import * as IframeInspectorViewStates from '../src/parts/IframeInspectorViewStates/IframeInspectorViewStates.ts'

test.skip('handleBlur', () => {
  const state = createDefaultState()
  HandleBlur.handleBlur(state)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(-1)
})
