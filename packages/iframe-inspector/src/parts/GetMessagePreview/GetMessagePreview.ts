export const getMessagePreview = (input: string, maxLength: number): string => {
  if (input.length < maxLength) {
    return input
  }
  const part = input.slice(0, maxLength)
  return part + '...'
}
