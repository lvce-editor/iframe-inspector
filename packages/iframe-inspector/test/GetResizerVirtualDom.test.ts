import { expect, test } from '@jest/globals'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetResizerVirtualDom from '../src/parts/GetResizerVirtualDom/GetResizerVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('getResizerVirtualDom', () => {
  expect(GetResizerVirtualDom.getResizerVirtualDom()).toEqual([
    {
      type: VirtualDomElements.Div,
      className: ClassNames.IframeInspectorResizer,
      childCount: 0,
      onPointerDown: 'handleResizerMouseDown',
      onPointerMove: 'handleResizerMouseMove',
      onPointerUp: 'handleResizerMouseUp',
    },
  ])
})
