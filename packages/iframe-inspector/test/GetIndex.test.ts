import { expect, test } from '@jest/globals'
import * as GetIndex from '../src/parts/GetIndex/GetIndex.ts'

test('GetIndex - basic calculation', () => {
  const headerHeight = 50
  const y = 0
  const eventY = 100
  const itemHeight = 25
  const result = GetIndex.getIndex(headerHeight, y, eventY, itemHeight)
  expect(result).toBe(2)
})

test('GetIndex - with y offset', () => {
  const headerHeight = 50
  const y = 20
  const eventY = 120
  const itemHeight = 25
  const result = GetIndex.getIndex(headerHeight, y, eventY, itemHeight)
  expect(result).toBe(2)
})

test('GetIndex - first item', () => {
  const headerHeight = 50
  const y = 0
  const eventY = 60
  const itemHeight = 25
  const result = GetIndex.getIndex(headerHeight, y, eventY, itemHeight)
  expect(result).toBe(0)
})

test('GetIndex - negative index', () => {
  const headerHeight = 50
  const y = 0
  const eventY = 40
  const itemHeight = 25
  const result = GetIndex.getIndex(headerHeight, y, eventY, itemHeight)
  expect(result).toBe(-1)
})

test('GetIndex - with fractional result', () => {
  const headerHeight = 50
  const y = 0
  const eventY = 87
  const itemHeight = 25
  const result = GetIndex.getIndex(headerHeight, y, eventY, itemHeight)
  expect(result).toBe(1)
})

test('GetIndex - large values', () => {
  const headerHeight = 100
  const y = 50
  const eventY = 1050
  const itemHeight = 50
  const result = GetIndex.getIndex(headerHeight, y, eventY, itemHeight)
  expect(result).toBe(18)
})
