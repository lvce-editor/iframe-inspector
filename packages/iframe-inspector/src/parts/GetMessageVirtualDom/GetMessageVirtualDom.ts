import type { Message } from '../Message/Message.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getMessageVirtualDom = (message: Message): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.IframeInspectorMessage,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Div,
      className: 'InspectorMessageMethod',
      childCount: 1,
    },
    text(message.method),
    {
      type: VirtualDomElements.Div,
      className: 'InspectorMessageParams',
      childCount: 1,
    },
    text(JSON.stringify(message.params)),
  ]
}
