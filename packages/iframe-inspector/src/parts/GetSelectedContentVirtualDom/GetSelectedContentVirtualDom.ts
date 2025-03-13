import type { Message } from '../Message/Message.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getSelectedContentVirtualDom = (messages: readonly Message[], selectedIndex: number): readonly VirtualDomNode[] => {
  if (selectedIndex === -1) {
    return [
      {
        type: VirtualDomElements.Div,
        className: 'IframeInspectorSelectedContent',
        childCount: 1,
      },
      text('no message selected'),
    ]
  }
  const selectedMessage = messages[selectedIndex]
  const stringified = JSON.stringify(selectedMessage, null, 2)
  return [
    {
      type: VirtualDomElements.Div,
      className: 'IframeInspectorSelectedContent',
      childCount: 1,
    },
    {
      type: VirtualDomElements.Pre,
      className: 'IframeInspectorSelectedContentPre',
      childCount: 1,
    },
    text(stringified),
  ]
}
