import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
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
      name: 'handleBlur',
      params: ['handleBlur'],
    },
    {
      name: 'handleFilterInput',
      params: ['handleFilterInput', 'event.target.value'],
    },
  ]
}
