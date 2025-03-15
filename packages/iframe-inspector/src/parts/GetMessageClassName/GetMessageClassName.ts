import * as ClassNames from '../ClassNames/ClassNames.ts'
import * as MergeClassNames from '../MergeClassNames/MergeClassNames.ts'

export const getMessageClassName = (isSelected: boolean): string => {
  return MergeClassNames.mergeClassNames(ClassNames.IframeInspectorMessage, isSelected ? ClassNames.IframeInspectorMessageSelected : '')
}
