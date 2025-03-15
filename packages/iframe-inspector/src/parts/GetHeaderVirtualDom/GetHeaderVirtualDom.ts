import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getHeaderVirtualDom = (): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.THead,
      className: ClassNames.TableHead,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Tr,
      className: ClassNames.TableRow,
      childCount: 2,
    },
    {
      type: VirtualDomElements.Th,
      className: ClassNames.TableCell,
      childCount: 1,
    },
    text('Data'),
    {
      type: VirtualDomElements.Th,
      className: ClassNames.TableCell,
      childCount: 1,
    },
    text('Length'),
  ]
}
