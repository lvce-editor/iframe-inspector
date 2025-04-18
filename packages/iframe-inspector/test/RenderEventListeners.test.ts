import { expect, test } from '@jest/globals'
import * as RenderEventListeners from '../src/parts/RenderEventListeners/RenderEventListeners.ts'

test('renderEventListeners', () => {
  expect(RenderEventListeners.renderEventListeners()).toEqual([
    {
      name: 'handleClick',
      params: ['handleClick', 'event.clientX', 'event.clientY'],
      preventDefault: true,
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
    {
      name: 'handleSelectedContentClick',
      params: ['handleSelectedContentClick', 'event.clientX', 'event.clientY'],
      preventDefault: true,
    },
    {
      name: 'handleFocus',
      params: ['handleFocus'],
    },
    {
      name: 'handleListFocus',
      params: ['handleListFocus'],
    },
    {
      name: 'handleBlur',
      params: ['handleBlur'],
    },
    {
      name: 'handleListBlur',
      params: ['handleListBlur'],
    },
    {
      name: 'handleFilterInput',
      params: ['handleFilterInput', 'event.target.value'],
    },
    {
      name: 'handleWheel',
      params: ['handleWheel', 'event.deltaY'],
      preventDefault: true,
    },
  ])
})
