import type { DomEventListener } from '../DomEventListener/DomEventListener.ts'
import * as DomEventListeners from '../DomEventListeners/DomEventListeners.ts'

export const renderEventListeners = (): readonly DomEventListener[] => {
  return [
    {
      name: DomEventListeners.HandleClick,
      params: ['handleClick', 'event.clientX', 'event.clientY'],
      preventDefault: true,
    },
    {
      name: DomEventListeners.HandleResizerMouseDown,
      params: ['handleResizerMouseDown', 'event.clientY'],
      preventDefault: true,
    },
    {
      name: DomEventListeners.HandleResizerMouseMove,
      params: ['handleResizerMouseMove', 'event.clientY'],
      preventDefault: true,
    },
    {
      name: DomEventListeners.HandleResizerMouseUp,
      params: ['handleResizerMouseUp'],
      preventDefault: true,
    },
    {
      name: DomEventListeners.HandleSelectedContentClick,
      params: ['handleSelectedContentClick', 'event.clientX', 'event.clientY'],
      preventDefault: true,
    },
    {
      name: DomEventListeners.HandleFocus,
      params: ['handleFocus'],
    },
    {
      name: DomEventListeners.HandleListFocus,
      params: ['handleListFocus'],
    },
    {
      name: DomEventListeners.HandleBlur,
      params: ['handleBlur'],
    },
    {
      name: DomEventListeners.HandleListBlur,
      params: ['handleListBlur'],
    },
    {
      name: DomEventListeners.HandleFilterInput,
      params: ['handleFilterInput', 'event.target.value'],
    },
    {
      name: DomEventListeners.HandleWheel,
      params: ['handleWheel', 'event.deltaY'],
      preventDefault: true,
    },
  ]
}
