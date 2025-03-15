export const isExpandable = (value: any): boolean => {
  return value !== null && (typeof value === 'object' || Array.isArray(value))
}
