import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getTokenVirtualDom = (tokenType: string, tokenText: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Span,
      className: `Token ${tokenType}`,
      childCount: 1,
    },
    text(tokenText),
  ]
}
