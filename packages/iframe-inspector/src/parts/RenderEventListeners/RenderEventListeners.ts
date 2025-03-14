import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
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
  ]
}
