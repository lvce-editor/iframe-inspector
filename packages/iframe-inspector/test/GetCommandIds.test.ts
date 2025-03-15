import { expect, test } from '@jest/globals'
import * as GetCommandIds from '../src/parts/GetCommandIds/GetCommandIds.ts'

test('getCommandIds', () => {
  expect(GetCommandIds.getCommandIds()).toEqual([
    'handleClick',
    'handleArrowDown',
    'handleArrowUp',
    'handleHome',
    'handleEnd',
    'handleResizerMouseDown',
    'handleResizerMouseMove',
    'handleResizerMouseUp',
    'selectIndex',
  ])
})
