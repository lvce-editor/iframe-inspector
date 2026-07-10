import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const getColVirtualDom = (width: string): VirtualDomNode => {
  return {
    childCount: 0,
    className: ClassNames.Col,
    type: VirtualDomElements.Col,
    width,
  }
}

export const getColGroupVirtualDom = (columnWidths: readonly string[]): readonly VirtualDomNode[] => {
  return [
    {
      childCount: columnWidths.length,
      className: ClassNames.ColGroup,
      type: VirtualDomElements.ColGroup,
    },
    ...columnWidths.map(getColVirtualDom),
  ]
}
