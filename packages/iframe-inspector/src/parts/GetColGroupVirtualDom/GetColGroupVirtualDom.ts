import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getColGroupVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.ColGroup,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Col,
      width: 'auto',
      childCount: 0,
    },
    {
      type: VirtualDomElements.Col,
      width: '50px',
      childCount: 0,
    },
  ]
}
