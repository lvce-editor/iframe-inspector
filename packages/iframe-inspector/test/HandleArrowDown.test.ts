import { beforeEach, expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as HandleArrowDown from '../src/parts/HandleArrowDown/HandleArrowDown.ts'
import * as IframeInspectorViewStates from '../src/parts/IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as MessageState from '../src/parts/MessageState/MessageState.ts'

beforeEach(() => {
  MessageState.reset()
  const state: IframeInspectorState = {
    messages: [],
    uid: 1,
    messageVersion: 0,
    selectedIndex: -1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    headerHeight: 0,
    itemHeight: 0,
    messagesHeight: 0,
  }

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
