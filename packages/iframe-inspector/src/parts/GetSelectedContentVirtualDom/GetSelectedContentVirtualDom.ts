import type { SelectedMessageViewModel } from '../SelectedMessageViewModel/SelectedMessageViewModel.ts'
import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as GetKeyValuePairVirtualDom from '../GetKeyValuePairVirtualDom/GetKeyValuePairVirtualDom.ts'
import * as UiStrings from '../UiStrings/UiStrings.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'
import { text } from '../VirtualDomHelpers/VirtualDomHelpers.ts'

export const getSelectedContentVirtualDom = (viewModel: SelectedMessageViewModel, selectedIndex: number): readonly VirtualDomNode[] => {
  if (selectedIndex === -1) {
    return [
      {
        type: VirtualDomElements.Div,
        className: ClassNames.IframeInspectorSelectedContent,
        childCount: 1,
      },
      text(UiStrings.NoMessageSelected),
    ]
  }

  return [
    {
      type: VirtualDomElements.Div,
      className: ClassNames.IframeInspectorSelectedContent,
      childCount: 1,
    },
    {
      type: VirtualDomElements.Ol,
      className: ClassNames.IframeInspectorSelectedContentList,
      childCount: viewModel.pairs.length,
    },
    ...viewModel.pairs.flatMap(GetKeyValuePairVirtualDom.getKeyValuePairVirtualDom),
  ]
}
