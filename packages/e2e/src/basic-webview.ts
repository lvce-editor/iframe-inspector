import type { Test } from '@lvce-editor/test-with-playwright'

type TestContext = Readonly<{
  Command: any
  expect: any
  Extension: any
  FileSystem: any
  Locator: any
  Main: any
  WebView: any
}>

export const name = 'basic-webview'

export const test: Test = async ({
  Command,
  expect,
  Extension,
  FileSystem,
  Locator,
  Main,
  WebView,
}: TestContext) => {
  // arrange
  await Command.execute('Main.closeAllEditors')
  await Command.execute('Developer.openIframeInspector')
  await Extension.addWebExtension(new URL(`../fixtures/${name}`, import.meta.url).href)
  const tmpDir = await FileSystem.getTmpDir()
  await FileSystem.writeFile(`${tmpDir}/test.xyz`, `a`)

  // act
  await Main.openUri(`${tmpDir}/test.xyz`)

  // assert
  const webView = await WebView.fromId('xyz')
  const body = webView.locator('body')
  await expect(body).toHaveText('124')

  // arrange
  await Command.execute('Main.closeAllEditors')
  await Command.execute('Developer.openIframeInspector')

  const messages = Locator('.TableRow')
  await expect(messages).toHaveCount(6)

  const firstMessage = messages.nth(1)
  await expect(firstMessage).toHaveText('{"jsonrpc":"2.0","method":"ready","params":[]}46')
}
