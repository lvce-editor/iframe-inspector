import { expect, test } from '@jest/globals'
import * as GetMessageClassName from '../src/parts/GetMessageClassName/GetMessageClassName.ts'

test('getMessageClassName - not selected, even row', () => {
  const selected = false
  const isEven = true
  expect(GetMessageClassName.getMessageClassName(selected, isEven)).toBe('TableRow TableRowEven')
})

test('getMessageClassName - not selected, odd row', () => {
  const selected = false
  const isEven = false
  expect(GetMessageClassName.getMessageClassName(selected, isEven)).toBe('TableRow TableRowOdd')
})

test('getMessageClassName - selected, even row', () => {
  const selected = true
  const isEven = true
  expect(GetMessageClassName.getMessageClassName(selected, isEven)).toBe('TableRow TableRowSelected TableRowEven')
})

test('getMessageClassName - selected, odd row', () => {
  const selected = true
  const isEven = false
  expect(GetMessageClassName.getMessageClassName(selected, isEven)).toBe('TableRow TableRowSelected TableRowOdd')
})
