import { expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffItems from '../src/parts/DiffItems/DiffItems.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'

test('diffType', () => {
  expect(DiffItems.diffType).toBe(DiffType.RenderItems)
})

test('isEqual - same version', () => {
  const defaultState = CreateDefaultState.createDefaultState()
  const oldState: IframeInspectorState = {
    ...defaultState,
    messageVersion: 1,
  }
  const newState: IframeInspectorState = {
    ...defaultState,
    messageVersion: 1,
    expandedPaths: oldState.expandedPaths,
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(true)
})

test('isEqual - different version', () => {
  const defaultState = CreateDefaultState.createDefaultState()
  const oldState: IframeInspectorState = {
    ...defaultState,
    messageVersion: 1,
  }
  const newState: IframeInspectorState = {
    ...defaultState,
    messageVersion: 2,
    expandedPaths: oldState.expandedPaths,
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(false)
})
