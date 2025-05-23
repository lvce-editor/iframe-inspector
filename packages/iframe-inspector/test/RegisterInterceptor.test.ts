import { beforeEach, expect, jest, test } from '@jest/globals'
import * as ParentRpc from '../src/parts/RendererWorker/RendererWorker.ts'
import * as RegisterInterceptor from '../src/parts/RegisterInterceptor/RegisterInterceptor.ts'

const mockRpc = {
  // @ts-ignore
  invoke: jest.fn().mockResolvedValue(undefined),
  // @ts-ignore
  invokeAndTransfer: jest.fn().mockResolvedValue(undefined),
} as any

ParentRpc.set(mockRpc)

beforeEach(() => {
  jest.resetAllMocks()
})

test('registerInterceptor', async () => {
  await RegisterInterceptor.registerInterceptor()
  expect(mockRpc.invokeAndTransfer).toHaveBeenCalledTimes(1)
  expect(mockRpc.invokeAndTransfer).toHaveBeenCalledWith('WebView.registerInterceptor', 1, expect.any(MessagePort))
})
