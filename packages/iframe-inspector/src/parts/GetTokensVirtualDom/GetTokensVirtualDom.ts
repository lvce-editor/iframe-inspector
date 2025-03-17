import type { Token } from '../Token/Token.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as GetTokenVirtualDom from '../GetTokenVirtualDom/GetTokenVirtualDom.ts'

export const getTokensVirtualDom = (messageTokens: readonly Token[]): readonly VirtualDomNode[] => {
  return messageTokens.flatMap(GetTokenVirtualDom.getTokenVirtualDom)
}
