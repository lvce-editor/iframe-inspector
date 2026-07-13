import type { Token } from '../Token/Token.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetTokensVirtualDom from '../GetTokensVirtualDom/GetTokensVirtualDom.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const getMessagePreviewVirtualDom = (messageTokens: readonly Token[]): readonly VirtualDomNode[] => {
  return [
    {
      childCount: 1,
      className: ClassNames.TableCell,
      type: VirtualDomElements.Td,
    },
    {
      childCount: messageTokens.length,
      className: ClassNames.IframeInspectorCode,
      type: VirtualDomElements.Code,
    },
    ...GetTokensVirtualDom.getTokensVirtualDom(messageTokens),
  ]
}
