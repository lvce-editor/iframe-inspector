import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

const headerDom: readonly VirtualDomNode[] = [
  {
    childCount: 1,
    className: ClassNames.TableHead,
    type: VirtualDomElements.THead,
  },
  {
    childCount: 2,
    className: ClassNames.TableRow,
    type: VirtualDomElements.Tr,
  },
  {
    childCount: 1,
    className: ClassNames.TableCell,
    type: VirtualDomElements.Th,
  },
  text('Data'),
  {
    childCount: 1,
    className: ClassNames.TableCell,
    type: VirtualDomElements.Th,
  },
  text('Length'),
]

export const getHeaderVirtualDom = (): readonly VirtualDomNode[] => {
  return headerDom
}
