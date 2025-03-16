import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as GetMessageClassName from '../GetMessageClassName/GetMessageClassName.ts'
import * as GetMessageLengthVirtualDom from '../GetMessageLengthVirtualDom/GetMessageLengthVirtualDom.ts'
import * as GetMessagePreviewVirtualDom from '../GetMessagePreviewVirtualDom/GetMessagePreviewVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getMessageVirtualDom = (message: MessageViewModel): readonly VirtualDomNode[] => {
  const { isSelected, messagePreview, messagePreviewLength, isEven } = message
  return [
    {
      type: VirtualDomElements.Tr,
      className: GetMessageClassName.getMessageClassName(isSelected, isEven),
      childCount: 2,
    },
    ...GetMessagePreviewVirtualDom.getMessagePreviewVirtualDom(messagePreview),
    ...GetMessageLengthVirtualDom.getMessageLengthVirtualDom(messagePreviewLength),
  ]
}
