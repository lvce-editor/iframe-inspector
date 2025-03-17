import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetTokensVirtualDom from '../GetTokensVirtualDom/GetTokensVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getMessagePreviewVirtualDom = (messageTokens: readonly string[]): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Td,
      className: ClassNames.TableCell,
      childCount: messageTokens.length / 2,
    },
    ...GetTokensVirtualDom.getTokensVirtualDom(messageTokens),
  ]
}
