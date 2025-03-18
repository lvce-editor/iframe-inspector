import type { KeyBinding } from '../KeyBinding/KeyBinding.ts'
import * as KeyCode from '../KeyCode/KeyCode.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const getKeyBindings = (): readonly KeyBinding[] => {
  return [
    {
      key: KeyCode.DownArrow,
      command: 'IframeInspector.handleArrowDown',
      when: WhenExpression.FocusIframeInspector,
    },
    {
      key: KeyCode.UpArrow,
      command: 'IframeInspector.handleArrowUp',
      when: WhenExpression.FocusIframeInspector,
    },
    {
      key: KeyCode.Home,
      command: 'IframeInspector.handleHome',
      when: WhenExpression.FocusIframeInspector,
    },
    {
      key: KeyCode.End,
      command: 'IframeInspector.handleEnd',
      when: WhenExpression.FocusIframeInspector,
    },
  ]
}
