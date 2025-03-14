import { expect, test } from '@jest/globals'
import type { IframeInspectorState } from '../src/parts/IframeInspectorState/IframeInspectorState.ts'
import * as DiffItems from '../src/parts/DiffItems/DiffItems.ts'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'

test('diffType', () => {
  expect(DiffItems.diffType).toBe(DiffType.RenderItems)
})

test('isEqual - same version', () => {
  const oldState: IframeInspectorState = {
    messageVersion: 1,
    messages: [],
    uid: 1,
    selectedIndex: -1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    headerHeight: 0,
    itemHeight: 0,
  }
  const newState: IframeInspectorState = {
    messageVersion: 1,
    messages: [],
    uid: 1,
    selectedIndex: -1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    headerHeight: 0,
    itemHeight: 0,
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(true)
})

test('isEqual - different version', () => {
  const oldState: IframeInspectorState = {
    messageVersion: 1,
    messages: [],
    uid: 1,
    selectedIndex: -1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    headerHeight: 0,
    itemHeight: 0,
  }
  const newState: IframeInspectorState = {
    messageVersion: 2,
    messages: [],
    uid: 1,
    selectedIndex: -1,
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    headerHeight: 0,
    itemHeight: 0,
  }
  expect(DiffItems.isEqual(oldState, newState)).toBe(false)
})
