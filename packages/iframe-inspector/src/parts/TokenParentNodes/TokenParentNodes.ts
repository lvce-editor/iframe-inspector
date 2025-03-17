import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const createTokenNode = (className: string): VirtualDomNode => {
  return {
    type: VirtualDomElements.Span,
    className: `Token ${className}`,
    childCount: 1,
  }
}

export const tokenParentNodes: readonly VirtualDomNode[] = [
  createTokenNode('Comment'),
  createTokenNode('CurlyClose'),
  createTokenNode('JsonPropertyName'),
  createTokenNode('JsonPropertyValueString'),
  createTokenNode('LanguageConstant'),
  createTokenNode('Numeric'),
  createTokenNode('Punctuation'),
  createTokenNode('String'),
  createTokenNode('Text'),
  createTokenNode('Whitespace'),
]
