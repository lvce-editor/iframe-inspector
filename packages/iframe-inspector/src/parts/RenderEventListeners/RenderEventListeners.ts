import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: 'handleClick',
      params: ['handleClick', 'event.clientX', 'event.clientY'],
    },
  ]
}
