import type { MessageViewModel } from '../MessageViewModel/MessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetTableVirtualDom from '../GetTableVirtualDom/GetTableVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

const parentNode: VirtualDomNode = {
  type: VirtualDomElements.Div,
  className: ClassNames.TableWrapper,
  childCount: 1,
}

export const getTableWrapperVirtualDom = (messages: readonly MessageViewModel[]): readonly VirtualDomNode[] => {
  return [parentNode, ...GetTableVirtualDom.getTableVirtualDom(messages)]
}
