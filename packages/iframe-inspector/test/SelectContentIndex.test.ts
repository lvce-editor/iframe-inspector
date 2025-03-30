import { beforeEach, expect, test } from '@jest/globals'
import * as CreateDefaultState from '../src/parts/CreateDefaultState/CreateDefaultState.ts'
import * as IframeInspectorViewStates from '../src/parts/IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as SelectContentIndex from '../src/parts/SelectContentIndex/SelectContentIndex.ts'

beforeEach(() => {
  const state = CreateDefaultState.createDefaultState()
  IframeInspectorViewStates.set(1, state, state)
})

test('selectContentIndex - expand path', () => {
  SelectContentIndex.selectContentIndex(1, 'params.0')
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.expandedPaths).toEqual(['params.0'])
})

test('selectContentIndex - collapse path', () => {
  SelectContentIndex.selectContentIndex(1, 'params.0')
  SelectContentIndex.selectContentIndex(1, 'params.0')
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.expandedPaths).toEqual([])
})

test('selectContentIndex - multiple paths', () => {
  SelectContentIndex.selectContentIndex(1, 'method')
  SelectContentIndex.selectContentIndex(1, 'params.0')
  const { newState } = IframeInspectorViewStates.get(1)
  expect(newState.expandedPaths).toEqual(['method', 'params.0'])
})
