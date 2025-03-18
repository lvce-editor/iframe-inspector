import type { Token } from '../Token/Token.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetTokensVirtualDom from '../GetTokensVirtualDom/GetTokensVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getMessagePreviewVirtualDom = (messageTokens: readonly Token[]): readonly VirtualDomNode[] => {
  return [
    {
      type: VirtualDomElements.Td,
      className: ClassNames.TableCell,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Code,
      className: 'IframeInspectorCode',
      childCount: messageTokens.length,
    },
    ...GetTokensVirtualDom.getTokensVirtualDom(messageTokens),
  ]
}
