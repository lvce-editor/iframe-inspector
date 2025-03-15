import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const getClassName = (isSelected: boolean): string => {
  return MergeClassNames.mergeClassNames(ClassNames.IframeInspectorMessage, isSelected ? ClassNames.IframeInspectorMessageSelected : '')
}

export const getMessageVirtualDom = (message: MessageViewModel): readonly VirtualDomNode[] => {
  const { isSelected, messagePreview, messagePreviewLength } = message
  return [
    {
      type: VirtualDomElements.Div,
      className: getClassName(isSelected),
      childCount: 2,
    },
    {
      type: VirtualDomElements.Pre,
      className: ClassNames.InspectorMessageData,
      childCount: 1,
    },
    text(messagePreview),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.InspectorMessageLength,
      childCount: 1,
    },
    text(messagePreviewLength),
  ]
}
