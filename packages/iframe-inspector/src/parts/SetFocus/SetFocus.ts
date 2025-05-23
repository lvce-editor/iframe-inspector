import * as ParentRpc from '../RendererWorker/RendererWorker.ts'

export const setFocus = async (focusId: number): Promise<void> => {
  await ParentRpc.invoke('Focus.setFocus', focusId)
}
