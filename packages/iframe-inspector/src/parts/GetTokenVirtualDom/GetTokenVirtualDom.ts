import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as TokenParentNodes from '../TokenParentNodes/TokenParentNodes.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getTokenVirtualDom = (tokenType: string, tokenText: string): readonly VirtualDomNode[] => {
  // @ts-ignore
  return [TokenParentNodes[tokenType], text(tokenText)]
}
