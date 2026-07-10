import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const tableCell: VirtualDomNode = {
  childCount: 1,
  className: ClassNames.TableCell,
  type: VirtualDomElements.Td,
}

const span: VirtualDomNode = {
  childCount: 1,
  className: MergeClassNames.mergeClassNames('Token Numeric'),
  type: VirtualDomElements.Span,
}

export const getMessageLengthVirtualDom = (messageLength: string): readonly VirtualDomNode[] => {
  return [tableCell, span, text(messageLength)]
}
