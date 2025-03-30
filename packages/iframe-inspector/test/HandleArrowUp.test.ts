import { beforeEach, expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleArrowUp from '../src/parts/HandleArrowUp/HandleArrowUp.ts'
import * as IframeInspectorViewStates from '../src/parts/IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as MessageState from '../src/parts/MessageState/MessageState.ts'

beforeEach(() => {
  MessageState.reset()
  const defaultState = CreateDefaultState.createDefaultState()
  const state: IframeInspectorState = {
    ...defaultState,
    selectedIndex: 1,
  }
  IframeInspectorViewStates.set(1, state, state)
})

test('handleArrowUp - from middle', () => {
  HandleArrowUp.handleArrowUp(1)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(0)
})

test('handleArrowUp - at start', () => {
  HandleArrowUp.handleArrowUp(1)
  HandleArrowUp.handleArrowUp(1)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(0)
})
