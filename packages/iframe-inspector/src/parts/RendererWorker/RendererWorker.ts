import { RendererWorker, type RendererWorkerApi } from '@lvce-editor/rpc-registry'

export const invokeAndTransfer = <T extends keyof RendererWorkerApi>(
  method: T,
  ...params: Parameters<RendererWorkerApi[T]>
): ReturnType<RendererWorkerApi[T]> => RendererWorker.invokeAndTransfer(method, ...params)

export const set = (...args: Readonly<Parameters<typeof RendererWorker.set>>): ReturnType<typeof RendererWorker.set> => RendererWorker.set(...args)
