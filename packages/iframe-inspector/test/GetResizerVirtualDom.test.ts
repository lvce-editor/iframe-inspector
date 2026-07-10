import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetResizerVirtualDom from '../src/parts/GetResizerVirtualDom/GetResizerVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getResizerVirtualDom', () => {
  expect(GetResizerVirtualDom.getResizerVirtualDom()).toEqual([
    {
      childCount: 0,
      className: ClassNames.IframeInspectorResizer,
      onPointerDown: 'handleResizerMouseDown',
      onPointerMove: 'handleResizerMouseMove',
      onPointerUp: 'handleResizerMouseUp',
      type: VirtualDomElements.Div,
    },
  ])
})
