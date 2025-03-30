import { beforeEach, expect, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as IframeInspectorViewStates from '../src/parts/IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as SelectIndex from '../src/parts/SelectIndex/SelectIndex.ts'

beforeEach(() => {
  const state = CreateDefaultState.createDefaultState()
  IframeInspectorViewStates.set(1, state, state)
})

test('selectIndex', () => {
  SelectIndex.selectIndex(1, 2)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(2)
  expect(newState.isFocused).toBe(true)
})

test('selectIndex - multiple updates', () => {
  SelectIndex.selectIndex(1, 2)
  SelectIndex.selectIndex(1, 3)
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.selectedIndex).toBe(3)
  expect(newState.isFocused).toBe(true)
})
