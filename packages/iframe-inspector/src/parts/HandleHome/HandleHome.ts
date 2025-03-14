import * as SelectIndex from '../SelectIndex/SelectIndex.ts'

export const handleHome = (uid: number): void => {
  SelectIndex.selectIndex(uid, 0)
}
