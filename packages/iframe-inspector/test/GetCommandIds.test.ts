import { expect, test } from '@jest/globals'
import * as GetCommandIds from '../src/parts/GetCommandIds/GetCommandIds.ts'

test('getCommandIds', () => {
  expect(GetCommandIds.getCommandIds()).toEqual([
    'handleArrowDown',
    'handleArrowUp',
    'handleBlur',
    'handleClick',
    'handleEnd',
    'handleFocus',
    'handleHome',
    'handleResizerMouseDown',
    'handleResizerMouseMove',
    'handleResizerMouseUp',
    'handleSelectedContentClick',
    'selectIndex',
  ])
})
