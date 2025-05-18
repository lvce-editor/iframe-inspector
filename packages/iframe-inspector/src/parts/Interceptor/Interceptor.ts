import * as ParentRpc from '../ParentRpc/ParentRpc.ts'

export const register = async (handleMessage: (data: any) => void): Promise<void> => {
  const id = 1
  const { port1, port2 } = new MessageChannel()
  // @ts-ignore todo
  await ParentRpc.invokeAndTransfer('WebView.registerInterceptor', id, port1)
  // TODO create rpc with port2
  // TODO remove event listener on dispose
  const wrappedHandleMessage = (event: any): void => {
    handleMessage(event.data)
  }
  port2.addEventListener('message', wrappedHandleMessage)
  port2.start()
}

export const unregister = async (id: number): Promise<void> => {
  await ParentRpc.invoke('WebView.unregisterInterceptor', id)
}
