export const getSavedFilterText = (state: unknown): string => {
  if (state && typeof state === 'object' && 'filterText' in state && typeof state['filterText'] === 'string') {
    return state.filterText
  }
  return ''
}
