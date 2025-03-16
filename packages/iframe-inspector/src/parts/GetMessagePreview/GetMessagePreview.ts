export const getMessagePreview = (stringified: string, maxLength: number): string => {
  if (stringified.length < maxLength) {
    return stringified
  }
  const part = stringified.slice(0, maxLength)
  return part + '...'
}
