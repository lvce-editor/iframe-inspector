import type { RestoredState } from '../RestoredState/RestoredState.ts'

const getFilterText = (state: unknown): string => {
  if (state && typeof state === 'object' && 'filterText' in state && typeof state['filterText'] === 'string') {
    return state.filterText
  }
  return ''
}

export const restoreState = (state: unknown): RestoredState => {
  const filterText = getFilterText(state)
  return {
    filterText,
  }
}
