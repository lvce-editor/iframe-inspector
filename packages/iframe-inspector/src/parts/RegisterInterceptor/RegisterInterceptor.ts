import * as HandleMessage from '../HandleMessage/HandleMessage.ts'
import * as Interceptor from '../Interceptor/Interceptor.ts'

const registered = false

export const registerInterceptor = async (uid: number): Promise<void> => {
  if (registered) {
    return
  }
  await Interceptor.register(uid, HandleMessage.handleMessage)
}
