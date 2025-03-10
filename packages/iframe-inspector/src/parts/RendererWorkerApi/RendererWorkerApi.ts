export interface RendererWorkerApi {
  // eslint-disable-next-line @typescript-eslint/prefer-readonly-parameter-types
  readonly 'WebView.registerInterceptor': (id: number, port: MessagePort) => Promise<void>
  readonly 'WebView.unregisterInterceptor': (id: number) => Promise<void>
}
