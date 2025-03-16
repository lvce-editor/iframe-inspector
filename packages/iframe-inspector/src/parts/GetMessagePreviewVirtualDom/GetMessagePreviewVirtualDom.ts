import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getMessagePreviewVirtualDom = (messagePreview: string, messageTokens: readonly string[]): readonly VirtualDomNode[] => {
  const nodes: VirtualDomNode[] = [
    {
      type: VirtualDomElements.Td,
      className: ClassNames.TableCell,
      childCount: messageTokens.length,
    },
  ]

  for (let i = 0; i < messageTokens.length; i += 2) {
    const tokenType = messageTokens[i]
    const tokenValue = messageTokens[i + 1]
    nodes.push({
      type: VirtualDomElements.Span,
      className: `Token ${tokenType}`,
      childCount: 1,
    })
    nodes.push(text(tokenValue))
  }

  return nodes
}
