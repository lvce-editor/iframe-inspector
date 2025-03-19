export const getIndex = (headerHeight: number, y: number, eventY: number, itemHeight: number, filterHeight: number): number => {
  const top = headerHeight + filterHeight + y
  const actualY = eventY - top
  const index = Math.floor(actualY / itemHeight)
  return index
}
