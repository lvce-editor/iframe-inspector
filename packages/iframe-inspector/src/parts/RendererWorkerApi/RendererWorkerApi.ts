export interface RendererWorkerApi {
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  readonly 'IframeWorker.registerInterceptor': (id: number, port: MessagePort) => Promise<void>
  readonly 'IframeWorker.unregisterInterceptor': (id: number) => Promise<void>
}
