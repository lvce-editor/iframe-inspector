import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as GetTokenVirtualDom from '../GetTokenVirtualDom/GetTokenVirtualDom.ts'

export const getTokensVirtualDom = (messageTokens: readonly string[]): readonly VirtualDomNode[] => {
  const allNodes: VirtualDomNode[] = []
  for (let i = 0; i < messageTokens.length; i += 2) {
    const nodes = GetTokenVirtualDom.getTokenVirtualDom(messageTokens[i], messageTokens[i + 1])
    allNodes.push(...nodes)
  }
  return allNodes
}
