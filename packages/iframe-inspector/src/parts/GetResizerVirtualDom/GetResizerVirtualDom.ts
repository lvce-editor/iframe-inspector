import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getResizerVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.IframeInspectorResizer,
      childCount: 0,
      onPointerDown: 'handleResizerMouseDown',
      onPointerMove: 'handleResizerMouseMove',
      onPointerUp: 'handleResizerMouseUp',
    },
  ]
}
