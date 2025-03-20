import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListeners from '../DomEventListeners/DomEventListeners.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getResizerVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.IframeInspectorResizer,
      childCount: 0,
      onPointerDown: DomEventListeners.HandleResizerMouseDown,
      onPointerMove: DomEventListeners.HandleResizerMouseMove,
      onPointerUp: DomEventListeners.HandleResizerMouseUp,
    },
  ]
}
