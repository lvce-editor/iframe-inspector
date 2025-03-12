import * as HandleMessage from '../HandleMessage/HandleMessage.ts'
import * as Interceptor from '../Interceptor/Interceptor.ts'

const registered = false

export const registerInterceptor = async (): Promise<void> => {
  if (registered) {
    return
  }
  await Interceptor.register(HandleMessage.handleMessage)
}
