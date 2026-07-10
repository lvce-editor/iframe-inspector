import type { SelectedMessageViewModel } from '../SelectedMessageViewModel/SelectedMessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as DomEventListeners from '../DomEventListeners/DomEventListeners.ts'
import * as GetKeyValuePairVirtualDom from '../GetKeyValuePairVirtualDom/GetKeyValuePairVirtualDom.ts'
import * as UiStrings from '../UiStrings/UiStrings.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getSelectedContentVirtualDom = (viewModel: SelectedMessageViewModel, selectedIndex: number): readonly VirtualDomNode[] => {
  if (selectedIndex === -1) {
    return [
      {
        childCount: 1,
        className: ClassNames.IframeInspectorSelectedContent,
        type: VirtualDomElements.Div,
      },
      text(UiStrings.NoMessageSelected),
    ]
  }

  return [
    {
      childCount: 1,
      className: ClassNames.IframeInspectorSelectedContent,
      type: VirtualDomElements.Div,
    },
    {
      childCount: viewModel.pairs.length,
      className: ClassNames.IframeInspectorSelectedContentList,
      onPointerDown: DomEventListeners.HandleSelectedContentClick,
      type: VirtualDomElements.Ol,
    },
    ...viewModel.pairs.flatMap(GetKeyValuePairVirtualDom.getKeyValuePairVirtualDom),
  ]
}
