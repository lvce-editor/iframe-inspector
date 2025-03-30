import { expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as DiffHeights from '../src/parts/DiffHeights/DiffHeights.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'

test('diffType', () => {
  expect(DiffHeights.diffType).toBe(DiffType.RenderHeights)
})

test('isEqual - same height', () => {
  const defaultState = CreateDefaultState.createDefaultState()
  const oldState: IframeInspectorState = {
    ...defaultState,
    messageVersion: 1,
    messagesHeight: 100,
  }

  const newState: IframeInspectorState = {
    ...defaultState,
    messageVersion: 1,
    messagesHeight: 100,
  }

  expect(DiffHeights.isEqual(oldState, newState)).toBe(true)
})

test('isEqual - different height', () => {
  const defaultState = CreateDefaultState.createDefaultState()
  const oldState: IframeInspectorState = {
    ...defaultState,
    messageVersion: 1,
    messagesHeight: 100,
  }

  const newState: IframeInspectorState = {
    ...defaultState,
    messageVersion: 1,
    messagesHeight: 200,
  }

  expect(DiffHeights.isEqual(oldState, newState)).toBe(false)
})
