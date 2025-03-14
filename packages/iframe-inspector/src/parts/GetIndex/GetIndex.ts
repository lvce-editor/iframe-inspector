export const getIndex = (headerHeight: number, y: number, eventY: number, itemHeight: number): number => {
  const actualY = eventY - headerHeight - y
  const index = Math.floor(actualY / itemHeight)
  return index
}
