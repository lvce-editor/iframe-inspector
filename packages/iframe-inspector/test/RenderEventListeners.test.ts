import { expect, test } from '@jest/globals'
import * as RenderEventListeners from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('renderEventListeners', () => {
  expect(RenderEventListeners.renderEventListeners()).toEqual([
    {
      name: 'handleClick',
      params: ['handleClick', 'event.clientX', 'event.clientY'],
    },
    {
      name: 'handleResizerMouseDown',
      params: ['handleResizerMouseDown', 'event.clientY'],
      preventDefault: true,
    },
    {
      name: 'handleResizerMouseMove',
      params: ['handleResizerMouseMove', 'event.clientY'],
      preventDefault: true,
    },
    {
      name: 'handleResizerMouseUp',
      params: ['handleResizerMouseUp'],
      preventDefault: true,
    },
  ])
})
