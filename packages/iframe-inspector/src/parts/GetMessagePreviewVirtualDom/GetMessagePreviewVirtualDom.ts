import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetTokenVirtualDom from '../GetTokenVirtualDom/GetTokenVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getMessagePreviewVirtualDom = (messagePreview: string, messageTokens: readonly string[]): readonly VirtualDomNode[] => {
  const allNodes: VirtualDomNode[] = [
    {
      type: VirtualDomElements.Td,
      className: ClassNames.TableCell,
      childCount: messageTokens.length / 2,
    },
  ]

  for (let i = 0; i < messageTokens.length; i += 2) {
    const nodes = GetTokenVirtualDom.getTokenVirtualDom(messageTokens[i], messageTokens[i + 1])
    allNodes.push(...nodes)
  }

  return allNodes
}
