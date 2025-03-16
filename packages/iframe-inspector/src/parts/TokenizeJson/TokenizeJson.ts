export const tokenizeJson = (input: string): readonly string[] => {
  const tokens: string[] = []
  let i = 0

  while (i < input.length) {
    const char = input[i]

    // Skip whitespace
    if (/\s/.test(char)) {
      i++
      continue
    }

    // Handle strings
    if (char === '"') {
      let value = char
      i++
      while (i < input.length && input[i] !== '"') {
        value += input[i]
        i++
      }
      if (i < input.length) {
        value += input[i]
      }
      tokens.push('string')
      tokens.push(value)
      i++
      continue
    }

    // Handle numbers
    if (/[0-9-]/.test(char)) {
      let value = char
      i++
      while (i < input.length && /[0-9.]/.test(input[i])) {
        value += input[i]
        i++
      }
      tokens.push('number')
      tokens.push(value)
      continue
    }

    // Handle booleans and null
    if (/[tfn]/.test(char)) {
      const rest = input.slice(i)
      if (rest.startsWith('true')) {
        tokens.push('boolean')
        tokens.push('true')
        i += 4
      } else if (rest.startsWith('false')) {
        tokens.push('boolean')
        tokens.push('false')
        i += 5
      } else if (rest.startsWith('null')) {
        tokens.push('null')
        tokens.push('null')
        i += 4
      } else {
        i++
      }
      continue
    }

    // Handle punctuation
    if (/[{}[\],:]/.test(char)) {
      tokens.push('punctuation')
      tokens.push(char)
      i++
      continue
    }

    // Skip unknown characters
    i++
  }

  return tokens
}
