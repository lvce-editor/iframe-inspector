import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'select-item-complex'

export const skip = 1

export const test: Test = async ({ Extension, Main, FileSystem, WebView, expect, Command, Locator }) => {
  // arrange
  await Command.execute('Main.closeAllEditors')
  await Command.execute('Developer.openIframeInspector')
  await Extension.addWebExtension(new URL(`../fixtures/complex-webview`, import.meta.url).toString())
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

  const thirdMessage = messages.nth(3)
  await expect(thirdMessage).toHaveText('{"jsonrpc":"2.0","id":1,"result":{"count":{"value":123}}}57')

  await Command.execute('IframeInspector.selectIndex', 2)

  const content = Locator('.IframeInspectorSelectedContent')
  await expect(content).toHaveText(`jsonrpc: "2.0"id: 1▶result: {}`)
}
