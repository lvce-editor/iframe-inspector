import type { Token } from '../Token/Token.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as TokenParentNodes from '../TokenParentNodes/TokenParentNodes.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getTokenVirtualDom = (token: Token): readonly VirtualDomNode[] => {
  const { tokenType, tokenText } = token
  return [TokenParentNodes.tokenParentNodes[tokenType], text(tokenText)]
}
