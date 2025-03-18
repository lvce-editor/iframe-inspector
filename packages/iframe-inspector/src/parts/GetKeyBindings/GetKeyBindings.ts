import type { KeyBinding } from '../KeyBinding/KeyBinding.ts'
import * as KeyCode from '../KeyCode/KeyCode.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const getKeyBindings = (): readonly KeyBinding[] => {
  return [
    {
      key: KeyCode.DownArrow,
      command: 'IframeInspector.focusNext',
      when: WhenExpression.FocusIframeInspector,
    },
    {
      key: KeyCode.UpArrow,
      command: 'IframeInspector.focusPrevious',
      when: WhenExpression.FocusIframeInspector,
    },
  ]
}
