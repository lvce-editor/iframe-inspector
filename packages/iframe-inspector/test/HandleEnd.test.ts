import { beforeEach, expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleEnd from '../src/parts/HandleEnd/HandleEnd.ts'
import * as IframeInspectorViewStates from '../src/parts/IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as MessageState from '../src/parts/MessageState/MessageState.ts'

beforeEach(() => {
  MessageState.reset()
  const defaultState = CreateDefaultState.createDefaultState()
  const state: IframeInspectorState = {
    ...defaultState,
    selectedIndex: 0,
  }
  IframeInspectorViewStates.set(1, state, state)
})

test('handleEnd - no messages', () => {
  HandleEnd.handleEnd(1)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(0)
})

test('handleEnd - with messages', () => {
  MessageState.addMessage({ method: 'test1' })
  MessageState.addMessage({ method: 'test2' })
  HandleEnd.handleEnd(1)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(1)
})
