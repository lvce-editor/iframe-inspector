import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetMessageClassName from '../GetMessageClassName/GetMessageClassName.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getMessageVirtualDom = (message: MessageViewModel): readonly VirtualDomNode[] => {
  const { isSelected, messagePreview, messagePreviewLength } = message
  return [
    {
      type: VirtualDomElements.Tr,
      className: GetMessageClassName.getMessageClassName(isSelected),
      childCount: 2,
    },
    {
      type: VirtualDomElements.Td,
      className: ClassNames.InspectorMessageData,
      childCount: 1,
    },
    text(messagePreview),
    {
      type: VirtualDomElements.Td,
      className: ClassNames.InspectorMessageLength,
      childCount: 1,
    },
    text(messagePreviewLength),
  ]
}
