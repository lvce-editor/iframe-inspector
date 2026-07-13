import type { KeyBinding } from '../KeyBinding/KeyBinding.ts'
import * as KeyCode from '../KeyCode/KeyCode.ts'
import * as WhenExpression from '../WhenExpression/WhenExpression.ts'

export const getKeyBindings = (): readonly KeyBinding[] => {
  return [
    {
      command: 'IframeInspector.handleArrowDown',
      key: KeyCode.DownArrow,
      when: WhenExpression.FocusIframeInspector,
    },
    {
      command: 'IframeInspector.handleArrowUp',
      key: KeyCode.UpArrow,
      when: WhenExpression.FocusIframeInspector,
    },
    {
      command: 'IframeInspector.handleHome',
      key: KeyCode.Home,
      when: WhenExpression.FocusIframeInspector,
    },
    {
      command: 'IframeInspector.handleEnd',
      key: KeyCode.End,
      when: WhenExpression.FocusIframeInspector,
    },
  ]
}
