import { expect, test } from '@jest/globals'
import * as DiffType from '../src/parts/DiffType/DiffType.ts'
import * as GetRenderer from '../src/parts/GetRenderer/GetRenderer.ts'
import * as RenderMessages from '../src/parts/RenderMessages/RenderMessages.ts'

test('getRenderer - render items', () => {
  expect(GetRenderer.getRenderer(DiffType.RenderItems)).toBe(RenderMessages.renderMessage)
})

test('getRenderer - unknown renderer', () => {
  expect(() => GetRenderer.getRenderer(-1)).toThrow('unknown renderer')
})
