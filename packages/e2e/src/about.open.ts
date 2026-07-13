import type { Test } from '@lvce-editor/test-with-playwright'

type TestContext = Readonly<{
  About: any
  expect: any
  Locator: any
}>

export const name = 'about.open'

export const test: Test = async ({
  About,
  expect,
  Locator,
}: TestContext) => {
  // act
  await About.show()

  // assert
  const dialogContent = Locator('.DialogContent')
  await expect(dialogContent).toBeVisible()
  const infoIcon = dialogContent.locator('.DialogInfoIcon')
  await expect(infoIcon).toBeVisible()
}
