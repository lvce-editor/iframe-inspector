import { RendererWorker } from '@lvce-editor/rpc-registry'

export const invokeAndTransfer = (
  ...args: Readonly<Parameters<typeof RendererWorker.invokeAndTransfer>>
): ReturnType<typeof RendererWorker.invokeAndTransfer> => RendererWorker.invokeAndTransfer(...args)

export const set = (...args: Readonly<Parameters<typeof RendererWorker.set>>): ReturnType<typeof RendererWorker.set> => RendererWorker.set(...args)
