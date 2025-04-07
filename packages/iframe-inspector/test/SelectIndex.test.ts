import { expect, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as SelectIndex from '../src/parts/SelectIndex/SelectIndex.ts'

test('selectIndex', () => {
  const state = CreateDefaultState.createDefaultState()
  const newState = SelectIndex.selectIndex(state, 2)
  expect(newState.selectedIndex).toBe(2)
  expect(newState.isFocused).toBe(true)
})

test('selectIndex - multiple updates', () => {
  const state = CreateDefaultState.createDefaultState()
  const newState1 = SelectIndex.selectIndex(state, 2)
  const newState2 = SelectIndex.selectIndex(newState1, 3)
  expect(newState2.selectedIndex).toBe(3)
  expect(newState2.isFocused).toBe(true)
})
