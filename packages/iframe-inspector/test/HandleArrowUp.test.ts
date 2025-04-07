import { beforeEach, expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleArrowUp from '../src/parts/HandleArrowUp/HandleArrowUp.ts'
import * as MessageState from '../src/parts/MessageState/MessageState.ts'

beforeEach(() => {
  MessageState.reset()
})

test('handleArrowUp - from middle', () => {
  const defaultState = CreateDefaultState.createDefaultState()
  const state: IframeInspectorState = {
    ...defaultState,
    selectedIndex: 1,
  }
  const newState = HandleArrowUp.handleArrowUp(state)
  expect(newState.selectedIndex).toBe(0)
})

test('handleArrowUp - at start', () => {
  const defaultState = CreateDefaultState.createDefaultState()
  let state: IframeInspectorState = {
    ...defaultState,
    selectedIndex: 1,
  }
  state = HandleArrowUp.handleArrowUp(state)
  state = HandleArrowUp.handleArrowUp(state)
  expect(state.selectedIndex).toBe(0)
})
