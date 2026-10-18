import { WebWorkerRpcClient } from '@lvce-editor/rpc'
import * as CommandMap from '../CommandMap/CommandMap.ts'
import * as IframeInspectorStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as ParentRpc from '../RendererWorker/RendererWorker.ts'

export const listen = async (): Promise<void> => {
  IframeInspectorStates.registerCommands(CommandMap.commandMap)
  const rpc = await WebWorkerRpcClient.create({
    commandMap: CommandMap.commandMap,
  })
  ParentRpc.set(rpc)
}
