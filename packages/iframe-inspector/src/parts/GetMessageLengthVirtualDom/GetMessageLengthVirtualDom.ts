import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const tableCell: VirtualDomNode = {
  type: VirtualDomElements.Td,
  className: ClassNames.TableCell,
  childCount: 1,
}

const span: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: MergeClassNames.mergeClassNames('Token Numeric'),
  childCount: 1,
}

export const getMessageLengthVirtualDom = (messageLength: string): readonly VirtualDomNode[] => {
  return [tableCell, span, text(messageLength)]
}
