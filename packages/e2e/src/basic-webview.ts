import type { Test } from '@lvce-editor/test-with-playwright'

export const name = 'basic-webview'

export const skip = 1

export const test: Test = async ({ Extension, Main, FileSystem, WebView, expect, Command, Locator }) => {
  // arrange
  await Command.execute('Main.closeAllEditors')
  await Command.execute('Developer.openIframeInspector')
  await Extension.addWebExtension(new URL(`../fixtures/${name}`, import.meta.url).toString())
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
