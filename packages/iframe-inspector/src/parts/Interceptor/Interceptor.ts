import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

export const register = async (id: number): Promise<void> => {
  const { port1 } = new MessageChannel()
  await ParentRpc.invokeAndTransfer('WebView.registerInterceptor', id, port1)
  // TODO create rpc with port2
}

export const unregister = async (id: number): Promise<void> => {
  await ParentRpc.invoke('WebView.unregisterInterceptor', id)
}
