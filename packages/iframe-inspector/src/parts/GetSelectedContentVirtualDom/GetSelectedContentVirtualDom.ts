import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getSelectedContentVirtualDom = (selectedMessageString: string, selectedIndex: number): readonly VirtualDomNode[] => {
  if (selectedIndex === -1) {
    return [
      {
        type: VirtualDomElements.Div,
        className: ClassNames.IframeInspectorSelectedContent,
        childCount: 1,
      },
      text('no message selected'),
    ]
  }
  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.IframeInspectorSelectedContent,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Pre,
      className: ClassNames.IframeInspectorSelectedContentPre,
      childCount: 1,
    },
    text(selectedMessageString),
  ]
}
