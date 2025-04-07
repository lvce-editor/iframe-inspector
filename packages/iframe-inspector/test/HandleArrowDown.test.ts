import { beforeEach, expect, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleArrowDown from '../src/parts/HandleArrowDown/HandleArrowDown.ts'
import * as MessageState from '../src/parts/MessageState/MessageState.ts'

beforeEach(() => {
  MessageState.reset()
})

test('handleArrowDown - no messages', () => {
  const state = CreateDefaultState.createDefaultState()
  const newState = HandleArrowDown.handleArrowDown(state)
  expect(newState.selectedIndex).toBe(-1)
})

test('handleArrowDown - with messages', () => {
  MessageState.addMessage({ method: 'test1' })
  MessageState.addMessage({ method: 'test2' })
  const state = CreateDefaultState.createDefaultState()
  const newState = HandleArrowDown.handleArrowDown(state)
  expect(newState.selectedIndex).toBe(0)
})

test('handleArrowDown - at end', () => {
  MessageState.addMessage({ method: 'test1' })
  MessageState.addMessage({ method: 'test2' })
  let state = CreateDefaultState.createDefaultState()
  state = HandleArrowDown.handleArrowDown(state)
  state = HandleArrowDown.handleArrowDown(state)
  state = HandleArrowDown.handleArrowDown(state)
  expect(state.selectedIndex).toBe(1)
})
