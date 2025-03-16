import { beforeEach, expect, jest, test } from '@jest/globals'
import * as RegisterInterceptor from '../src/parts/RegisterInterceptor/RegisterInterceptor.ts'
import * as RpcId from '../src/parts/RpcId/RpcId.ts'
import * as RpcRegistry from '../src/parts/RpcRegistry/RpcRegistry.ts'

const mockRpc = {
  // @ts-ignore
  invoke: jest.fn().mockResolvedValue(undefined),
  // @ts-ignore
  invokeAndTransfer: jest.fn().mockResolvedValue(undefined),
} as any

RpcRegistry.set(RpcId.RendererWorker, mockRpc)

beforeEach(() => {
  jest.resetAllMocks()
})

test('registerInterceptor', async () => {
  await RegisterInterceptor.registerInterceptor()
  expect(mockRpc.invokeAndTransfer).toHaveBeenCalledTimes(1)
  expect(mockRpc.invokeAndTransfer).toHaveBeenCalledWith('WebView.registerInterceptor', 1, expect.any(MessagePort))
})
