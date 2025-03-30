import { beforeEach, expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleHome from '../src/parts/HandleHome/HandleHome.ts'
import * as IframeInspectorViewStates from '../src/parts/IframeInspectorViewStates/IframeInspectorViewStates.ts'

beforeEach(() => {
  const defaultState = CreateDefaultState.createDefaultState()
  const state: IframeInspectorState = {
    ...defaultState,
    selectedIndex: 5,
  }
  IframeInspectorViewStates.set(1, state, state)
})

test('handleHome', () => {
  HandleHome.handleHome(1)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(0)
})
