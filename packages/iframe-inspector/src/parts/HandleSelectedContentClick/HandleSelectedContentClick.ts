import * as CreateSelectedMessageViewModel from '../CreateSelectedMessageViewModel/CreateSelectedMessageViewModel.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'
import * as MessageState from '../MessageState/MessageState.ts'
import * as SelectContentIndex from '../SelectContentIndex/SelectContentIndex.ts'

const bottomHeight = 220

export const handleSelectedContentClick = (uid: number, eventX: number, eventY: number): void => {
  const { newState } = IframeInspectorViewStates.get(uid)
  const topHeight = newState.height - bottomHeight
  const relativeY = eventY - newState.y - topHeight
  const index = Math.floor(relativeY / newState.selectedContentItemHeight)
  if (newState.selectedIndex === -1) {
    return
  }
  const messages = MessageState.getMessages()
  const selectedModel = CreateSelectedMessageViewModel.createSelectedMessageViewModel(messages, newState.selectedIndex, newState.expandedPaths)
  if (index >= 0 && index < selectedModel.pairs.length) {
    const {path} = selectedModel.pairs[index]
    SelectContentIndex.selectContentIndex(uid, path)
  }
}
