import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as GetMessageClassName from '../GetMessageClassName/GetMessageClassName.ts'
import * as GetMessageLengthVirtualDom from '../GetMessageLengthVirtualDom/GetMessageLengthVirtualDom.ts'
import * as GetMessagePreviewVirtualDom from '../GetMessagePreviewVirtualDom/GetMessagePreviewVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getMessageVirtualDom = (message: MessageViewModel): readonly VirtualDomNode[] => {
  const { isEven, isSelected, messagePreviewLength, messageTokens } = message
  return [
    {
      childCount: 2,
      className: GetMessageClassName.getMessageClassName(isSelected, isEven),
      type: VirtualDomElements.Tr,
    },
    ...GetMessagePreviewVirtualDom.getMessagePreviewVirtualDom(messageTokens),
    ...GetMessageLengthVirtualDom.getMessageLengthVirtualDom(messagePreviewLength),
  ]
}
