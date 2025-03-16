import { expect, test } from '@jest/globals'
import * as TokenizeJson from '../src/parts/TokenizeJson/TokenizeJson.ts'

test('tokenizeJson - empty object', () => {
  expect(TokenizeJson.tokenizeJson('{}')).toEqual(['punctuation', '{', 'punctuation', '}'])
})

test('tokenizeJson - string value', () => {
  expect(TokenizeJson.tokenizeJson('{"name":"test"}')).toEqual([
    'punctuation',
    '{',
    'string',
    '"name"',
    'punctuation',
    ':',
    'string',
    '"test"',
    'punctuation',
    '}',
  ])
})

test('tokenizeJson - number value', () => {
  expect(TokenizeJson.tokenizeJson('{"age":42}')).toEqual([
    'punctuation',
    '{',
    'string',
    '"age"',
    'punctuation',
    ':',
    'number',
    '42',
    'punctuation',
    '}',
  ])
})

test('tokenizeJson - boolean and null values', () => {
  expect(TokenizeJson.tokenizeJson('{"active":true,"data":null,"hidden":false}')).toEqual([
    'punctuation',
    '{',
    'string',
    '"active"',
    'punctuation',
    ':',
    'boolean',
    'true',
    'punctuation',
    ',',
    'string',
    '"data"',
    'punctuation',
    ':',
    'null',
    'null',
    'punctuation',
    ',',
    'string',
    '"hidden"',
    'punctuation',
    ':',
    'boolean',
    'false',
    'punctuation',
    '}',
  ])
})

test('tokenizeJson - array value', () => {
  expect(TokenizeJson.tokenizeJson('{"items":[1,2,3]}')).toEqual([
    'punctuation',
    '{',
    'string',
    '"items"',
    'punctuation',
    ':',
    'punctuation',
    '[',
    'number',
    '1',
    'punctuation',
    ',',
    'number',
    '2',
    'punctuation',
    ',',
    'number',
    '3',
    'punctuation',
    ']',
    'punctuation',
    '}',
  ])
})

test('tokenizeJson - nested object', () => {
  expect(TokenizeJson.tokenizeJson('{"user":{"name":"test"}}')).toEqual([
    'punctuation',
    '{',
    'string',
    '"user"',
    'punctuation',
    ':',
    'punctuation',
    '{',
    'string',
    '"name"',
    'punctuation',
    ':',
    'string',
    '"test"',
    'punctuation',
    '}',
    'punctuation',
    '}',
  ])
})
