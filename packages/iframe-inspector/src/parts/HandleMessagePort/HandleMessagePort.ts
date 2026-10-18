import { PlainMessagePortRpc } from '@lvce-editor/rpc'
import { RendererWorker } from '@lvce-editor/rpc-registry'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'

export const handleMessagePort = async (port: MessagePort): Promise<void> => {
  const rpc = await PlainMessagePortRpc.create({
    commandMap: IframeInspectorViewStates.createDirectEventCommandMap((uid) => RendererWorker.invoke('Viewlet.requestRender', uid)),
    messagePort: port,
  })
  RendererProcess.set(rpc)
}
