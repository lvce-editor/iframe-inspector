export const getMessagePreview = (message: any): string => {
  const maxLength = 100
  const stringified = JSON.stringify(message)
  if (stringified.length < maxLength) {
    return stringified
  }
  const part = stringified.slice(0, maxLength)
  return part + '...'
}
