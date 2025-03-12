import type { Message } from '../Message/Message.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetMessagePreview from '../GetMessagePreview/GetMessagePreview.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getMessageVirtualDom = (message: Message): readonly VirtualDomNode[] => {
  const preview = GetMessagePreview.getMessagePreview(message)
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.IframeInspectorMessage,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Div,
      className: 'InspectorMessagePreview',
      childCount: 1,
    },
    text(preview),
  ]
}
