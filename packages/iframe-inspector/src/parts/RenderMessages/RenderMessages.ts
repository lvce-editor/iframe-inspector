import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as GetIframeInspectorVirtualDom from '../GetIframeInspectorVirtualDom/GetIframeInspectorVirtualDom.ts'

export const renderMessage = (oldState: IframeInspectorState, newState: IframeInspectorState): readonly any[] => {
  const dom = GetIframeInspectorVirtualDom.getIframeInspectorVirtualDom(newState.messages)
  return ['Viewlet.setDom2', dom]
}
