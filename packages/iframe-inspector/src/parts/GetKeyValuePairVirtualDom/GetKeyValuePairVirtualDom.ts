import type { SelectedMessageKeyValuePair } from '../SelectedMessageViewModel/SelectedMessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getKeyValuePairVirtualDom = (pair: SelectedMessageKeyValuePair): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Li,
      className: ClassNames.IframeInspectorSelectedContentItem,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Span,
      className: ClassNames.IframeInspectorSelectedContentKey,
      childCount: 1,
    },
    text(pair.key),
    {
      type: VirtualDomElements.Span,
      className: ClassNames.IframeInspectorSelectedContentValue,
      childCount: 1,
    },
    text(pair.stringifiedValue),
  ]
}
