import { expect, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleHome from '../src/parts/HandleHome/HandleHome.ts'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'

test('handleHome', () => {
  const defaultState = CreateDefaultState.createDefaultState()
  const state: IframeInspectorState = {
    ...defaultState,
    selectedIndex: 5,
  }
  const newState = HandleHome.handleHome(state)
  expect(newState.selectedIndex).toBe(0)
})
