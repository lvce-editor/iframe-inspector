export function stringifyMessage(message: unknown): string {
  return JSON.stringify(message, null, 2)
}
