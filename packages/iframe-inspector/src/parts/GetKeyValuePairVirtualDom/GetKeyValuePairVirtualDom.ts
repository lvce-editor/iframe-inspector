import type { SelectedMessageKeyValuePair } from '../SelectedMessageViewModel/SelectedMessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getKeyValuePairVirtualDom = (pair: SelectedMessageKeyValuePair): readonly VirtualDomNode[] => {
  const nodes: VirtualDomNode[] = [
    {
      type: VirtualDomElements.Li,
      className: ClassNames.IframeInspectorSelectedContentItem,
      paddingLeft: `${pair.depth * 20}px`,
      childCount: pair.isExpandable ? 4 : 3,
    },
  ]

  if (pair.isExpandable) {
    nodes.push(
      {
        type: VirtualDomElements.Span,
        className: ClassNames.IframeInspectorExpandIcon,
        childCount: 1,
        onClick: ['toggleExpand', pair.path],
      },
      text(pair.isExpanded ? '▼' : '▶'),
    )
  }

  nodes.push(
    {
      type: VirtualDomElements.Span,
      className: ClassNames.IframeInspectorSelectedContentKey,
      childCount: 1,
    },
    text(pair.key),
    text(': '),
    {
      type: VirtualDomElements.Span,
      className: ClassNames.IframeInspectorSelectedContentValue,
      childCount: 1,
    },
    text(pair.stringifiedValue),
  )

  return nodes
}
