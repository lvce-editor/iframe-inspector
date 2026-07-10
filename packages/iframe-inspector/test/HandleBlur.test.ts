import { expect, test } from '@jest/globals'
import { createDefaultState } from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as HandleBlur from '../src/parts/HandleBlur/HandleBlur.ts'

test('handleBlur', () => {
  const state = createDefaultState()
  expect(HandleBlur.handleBlur(state)).toEqual(state)
})
