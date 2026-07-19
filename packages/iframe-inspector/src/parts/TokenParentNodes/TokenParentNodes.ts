import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const createTokenNode = (className: string): VirtualDomNode => {
  return {
    childCount: 1,
    className: MergeClassNames.mergeClassNames('Token', className),
    type: VirtualDomElements.Span,
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
