import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const getColVirtualDom = (width: string): VirtualDomNode => {
  return {
    type: VirtualDomElements.Col,
    className: 'Col',
    width,
    childCount: 0,
  }
}

export const getColGroupVirtualDom = (columnWidths: readonly string[]): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.ColGroup,
      className: 'ColGroup',
      childCount: columnWidths.length,
    },
    ...columnWidths.map(getColVirtualDom),
  ]
}
