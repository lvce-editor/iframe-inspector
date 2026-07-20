import type { SelectedMessageKeyValuePair } from '../SelectedMessageViewModel/SelectedMessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const expandIconNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.IframeInspectorExpandIcon,
  type: VirtualDomElements.Span,
}

const keyNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.IframeInspectorSelectedContentKey,
  type: VirtualDomElements.Span,
}

const valueNode: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.IframeInspectorSelectedContentValue,
  type: VirtualDomElements.Span,
}

export const getKeyValuePairVirtualDom = (pair: SelectedMessageKeyValuePair): readonly VirtualDomNode[] => {
  const nodes: VirtualDomNode[] = [
    {
      childCount: pair.isExpandable ? 4 : 3,
      className: ClassNames.IframeInspectorSelectedContentItem,
      paddingLeft: `${pair.depth * 20}px`,
      type: VirtualDomElements.Li,
    },
  ]

  if (pair.isExpandable) {
    nodes.push(expandIconNode, text(pair.isExpanded ? '▼' : '▶'))
  }

  nodes.push(
    keyNode,
    text(pair.key),
    text(': '),
    valueNode,
    text(pair.stringifiedValue),
  )

  return nodes
}
