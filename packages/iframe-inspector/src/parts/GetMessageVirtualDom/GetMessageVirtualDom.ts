import type { MessageViewModel } from '../CreateMessageViewModel/CreateMessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getMessageVirtualDom = (message: MessageViewModel): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: MergeClassNames.mergeClassNames(
        ClassNames.IframeInspectorMessage,
        message.isSelected ? ClassNames.IframeInspectorMessageSelected : '',
      ),
      childCount: 2,
    },
    {
      type: VirtualDomElements.Pre,
      className: ClassNames.InspectorMessageData,
      childCount: 1,
    },
    text(message.messagePreview),
    {
      type: VirtualDomElements.Div,
      className: ClassNames.InspectorMessageLength,
      childCount: 1,
    },
    text(String(message.messagePreviewLength)),
  ]
}
