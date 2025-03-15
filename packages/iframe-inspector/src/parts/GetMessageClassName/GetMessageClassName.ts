import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

export const getMessageClassName = (isSelected: boolean, isEven: boolean): string => {
  return MergeClassNames.mergeClassNames(
    ClassNames.TableRow,
    isSelected ? ClassNames.TableRowSelected : '',
    isEven ? ClassNames.TableRowEven : ClassNames.TableRowOdd,
  )
}
