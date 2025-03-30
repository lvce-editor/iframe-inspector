import type { RestoredState } from '../RestoredState/RestoredState.ts'
import * as GetSavedFilterText from '../GetSavedFilterText/GetSavedFilterText.ts'

export const restoreState = (state: unknown): RestoredState => {
  const filterText = GetSavedFilterText.getSavedFilterText(state)
  return {
    filterText,
  }
}
