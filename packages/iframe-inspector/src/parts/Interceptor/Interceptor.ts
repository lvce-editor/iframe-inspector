import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

// TODO remove event listener on dispose
const handleMessage = (event: any): void => {
  // TODO
  // console.log('got event', event.data)
}

export const register = async (id: number): Promise<void> => {
  const { port1, port2 } = new MessageChannel()
  await ParentRpc.invokeAndTransfer('WebView.registerInterceptor', id, port1)
  // TODO create rpc with port2
  port2.addEventListener('message', handleMessage)
  port2.start()
}

export const unregister = async (id: number): Promise<void> => {
  await ParentRpc.invoke('WebView.unregisterInterceptor', id)
}
