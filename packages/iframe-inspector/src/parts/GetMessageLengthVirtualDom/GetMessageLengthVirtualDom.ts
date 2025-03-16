import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getMessageLengthVirtualDom = (messageLength: string): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Td,
      className: ClassNames.TableCell,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Span,
      className: MergeClassNames.mergeClassNames('Token Numeric'),
      childCount: 1,
    },
    text(messageLength),
  ]
}
