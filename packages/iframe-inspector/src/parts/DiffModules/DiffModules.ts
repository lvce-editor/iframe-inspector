import * as DiffFocus from '../DiffFocus/DiffFocus.ts'
import * as DiffHeights from '../DiffHeights/DiffHeights.ts'
import * as DiffItems from '../DiffItems/DiffItems.ts'

export const modules = [DiffItems.isEqual, DiffHeights.isEqual, DiffFocus.isEqual]

export const numbers = [DiffItems.diffType, DiffHeights.diffType, DiffFocus.diffType]
