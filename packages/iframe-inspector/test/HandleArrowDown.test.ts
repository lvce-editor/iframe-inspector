import { beforeEach, expect, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleArrowDown from '../src/parts/HandleArrowDown/HandleArrowDown.ts'
import * as IframeInspectorViewStates from '../src/parts/IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as MessageState from '../src/parts/MessageState/MessageState.ts'

beforeEach(() => {
  MessageState.reset()
  const state = CreateDefaultState.createDefaultState()
  IframeInspectorViewStates.set(1, state, state)
})

test('handleArrowDown - no messages', () => {
  HandleArrowDown.handleArrowDown(1)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(-1)
})

test('handleArrowDown - with messages', () => {
  MessageState.addMessage({ method: 'test1' })
  MessageState.addMessage({ method: 'test2' })
  HandleArrowDown.handleArrowDown(1)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(0)
})

test('handleArrowDown - at end', () => {
  MessageState.addMessage({ method: 'test1' })
  MessageState.addMessage({ method: 'test2' })
  HandleArrowDown.handleArrowDown(1)
  HandleArrowDown.handleArrowDown(1)
  HandleArrowDown.handleArrowDown(1)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(1)
})
