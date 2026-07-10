import type { Message } from '../Message/Message.ts'
import type { SelectedMessageKeyValuePair, SelectedMessageViewModel } from '../SelectedMessageViewModel/SelectedMessageViewModel.ts'
import * as IsExpandable from '../IsExpandable/IsExpandable.ts'

const createPairs = (value: any, parentPath: string, depth: number, expandedPaths: readonly string[]): SelectedMessageKeyValuePair[] => {
  const pairs: SelectedMessageKeyValuePair[] = []
  const entries = Object.entries(value)

  for (const [key, childValue] of entries) {
    const path = parentPath ? `${parentPath}.${key}` : key
    const expandable = IsExpandable.isExpandable(childValue)
    const expanded = expandedPaths.includes(path)
    let stringifiedValue: string

    if (expandable) {
      stringifiedValue = Array.isArray(childValue) ? '[]' : '{}'
    } else {
      stringifiedValue = JSON.stringify(childValue)
    }

    pairs.push({
      depth,
      isExpandable: expandable,
      isExpanded: expanded,
      key,
      path,
      stringifiedValue,
      value: childValue,
    })

    if (expandable && expanded) {
      pairs.push(...createPairs(childValue, path, depth + 1, expandedPaths))
    }
  }
  return pairs
}

export const createSelectedMessageViewModel = (
  messages: readonly Message[],
  selectedIndex: number,
  expandedPaths: readonly string[],
): SelectedMessageViewModel => {
  if (selectedIndex === -1) {
    return {
      pairs: [],
    }
  }
  const message = messages[selectedIndex]
  const pairs = createPairs(message, '', 0, expandedPaths)
  return {
    pairs,
  }
}
