import { beforeEach, expect, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleEnd from '../src/parts/HandleEnd/HandleEnd.ts'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as MessageState from '../src/parts/MessageState/MessageState.ts'

beforeEach(() => {
  MessageState.reset()
})

test('handleEnd - no messages', () => {
  const defaultState = CreateDefaultState.createDefaultState()
  const state: IframeInspectorState = {
    ...defaultState,
    selectedIndex: 0,
  }
  const newState = HandleEnd.handleEnd(state)
  expect(newState.selectedIndex).toBe(0)
})

test('handleEnd - with messages', () => {
  MessageState.addMessage({ method: 'test1' })
  MessageState.addMessage({ method: 'test2' })
  const defaultState = CreateDefaultState.createDefaultState()
  const state: IframeInspectorState = {
    ...defaultState,
    selectedIndex: 0,
  }
  const newState = HandleEnd.handleEnd(state)
  expect(newState.selectedIndex).toBe(1)
})
