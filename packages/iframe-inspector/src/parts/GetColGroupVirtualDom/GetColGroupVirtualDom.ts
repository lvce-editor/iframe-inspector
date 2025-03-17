import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getColGroupVirtualDom = (columnWidths: readonly string[]): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.ColGroup,
      childCount: columnWidths.length,
    },
    ...columnWidths.map((width) => ({
      type: VirtualDomElements.Col,
      width,
      childCount: 0,
    })),
  ]
}
