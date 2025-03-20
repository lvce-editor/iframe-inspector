import * as I18nString from '../I18NString/I18NString.ts'
import * as UiStrings from '../UiStrings/UiStrings.ts'

export const noMessagesAvailable = (): string => {
  return I18nString.i18nString(UiStrings.NoMessagesFound)
}
