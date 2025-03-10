export interface RendererWorkerApi {
  readonly 'IframeWorker.registerInterceptor': (id: number, port: MessagePort) => Promise<void>
  readonly 'IframeWorker.unregisterInterceptor': (id: number) => Promise<void>
}
