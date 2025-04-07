import { expect, test } from '@jest/globals'
import * as HandleBlur from '../src/parts/HandleBlur/HandleBlur.ts'
import * as IframeInspectorViewStates from '../src/parts/IframeInspectorViewStates/IframeInspectorViewStates.ts'

test.skip('handleBlur', () => {
  HandleBlur.handleBlur(1)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(-1)
})
