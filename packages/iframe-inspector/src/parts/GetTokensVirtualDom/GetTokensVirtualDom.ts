import type { Token } from '../Token/Token.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as GetTokenVirtualDom from '../GetTokenVirtualDom/GetTokenVirtualDom.ts'

export const getTokensVirtualDom = (messageTokens: readonly Token[]): readonly VirtualDomNode[] => {
  const allNodes: VirtualDomNode[] = []
  for (let i = 0; i < messageTokens.length; i += 1) {
    const nodes = GetTokenVirtualDom.getTokenVirtualDom(messageTokens[i].tokenType, messageTokens[i].tokenText)
    allNodes.push(...nodes)
  }
  return allNodes
}
