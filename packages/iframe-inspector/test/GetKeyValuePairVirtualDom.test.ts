import { test, expect } from '@jest/globals'
import type { SelectedMessageKeyValuePair } from '../src/parts/SelectedMessageViewModel/SelectedMessageViewModel.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyValuePairVirtualDom from '../src/parts/GetKeyValuePairVirtualDom/GetKeyValuePairVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('GetKeyValuePairVirtualDom - empty object', () => {
  const pair: SelectedMessageKeyValuePair = {
    key: '',
    value: '',
    stringifiedValue: '',
    path: '',
    depth: 0,
    isExpandable: false,
    isExpanded: false,
  }
  const result = GetKeyValuePairVirtualDom.getKeyValuePairVirtualDom(pair)
  expect(result).toHaveLength(6)
  expect(result[0]).toEqual({
    childCount: 3,
    className: ClassNames.IframeInspectorSelectedContentItem,
    paddingLeft: '0px',
    type: VirtualDomElements.Li,
  })
})

test('GetKeyValuePairVirtualDom - simple key-value pairs', () => {
  const pair: SelectedMessageKeyValuePair = {
    key: 'id',
    value: 'test-id',
    stringifiedValue: '"test-id"',
    path: 'id',
    depth: 0,
    isExpandable: false,
    isExpanded: false,
  }
  const result = GetKeyValuePairVirtualDom.getKeyValuePairVirtualDom(pair)
  expect(result).toHaveLength(6)
  expect(result[0]).toEqual({
    childCount: 3,
    className: ClassNames.IframeInspectorSelectedContentItem,
    paddingLeft: '0px',
    type: VirtualDomElements.Li,
  })
  expect(result[1]).toEqual({
    childCount: 1,
    className: ClassNames.IframeInspectorSelectedContentKey,
    type: VirtualDomElements.Span,
  })
  expect(result[2]).toEqual({
    childCount: 0,
    text: 'id',
    type: VirtualDomElements.Text,
  })
  expect(result[3]).toEqual({
    childCount: 0,
    text: ': ',
    type: VirtualDomElements.Text,
  })
  expect(result[4]).toEqual({
    childCount: 1,
    className: ClassNames.IframeInspectorSelectedContentValue,
    type: VirtualDomElements.Span,
  })
  expect(result[5]).toEqual({
    childCount: 0,
    text: '"test-id"',
    type: VirtualDomElements.Text,
  })
})

test('GetKeyValuePairVirtualDom - expandable collapsed item', () => {
  const pair: SelectedMessageKeyValuePair = {
    key: 'style',
    value: {
      color: 'red',
      backgroundColor: 'blue',
    },
    stringifiedValue: '{...}',
    path: 'style',
    depth: 0,
    isExpandable: true,
    isExpanded: false,
  }
  const result = GetKeyValuePairVirtualDom.getKeyValuePairVirtualDom(pair)
  expect(result).toHaveLength(8)
  expect(result[0]).toEqual({
    childCount: 4,
    className: ClassNames.IframeInspectorSelectedContentItem,
    paddingLeft: '0px',
    type: VirtualDomElements.Li,
  })
  expect(result[1]).toEqual({
    childCount: 1,
    className: ClassNames.IframeInspectorExpandIcon,
    type: VirtualDomElements.Span,
  })
  expect(result[2]).toEqual({
    childCount: 0,
    text: '▶',
    type: VirtualDomElements.Text,
  })
})

test('GetKeyValuePairVirtualDom - expandable expanded item', () => {
  const pair: SelectedMessageKeyValuePair = {
    key: 'data',
    value: {
      number: 42,
      boolean: true,
    },
    stringifiedValue: '{...}',
    path: 'data',
    depth: 0,
    isExpandable: true,
    isExpanded: true,
  }
  const result = GetKeyValuePairVirtualDom.getKeyValuePairVirtualDom(pair)
  expect(result).toHaveLength(8)
  expect(result[0]).toEqual({
    childCount: 4,
    className: ClassNames.IframeInspectorSelectedContentItem,
    paddingLeft: '0px',
    type: VirtualDomElements.Li,
  })
  expect(result[1]).toEqual({
    childCount: 1,
    className: ClassNames.IframeInspectorExpandIcon,
    type: VirtualDomElements.Span,
  })
  expect(result[2]).toEqual({
    childCount: 0,
    text: '▼',
    type: VirtualDomElements.Text,
  })
})

test('GetKeyValuePairVirtualDom - array values', () => {
  const pair: SelectedMessageKeyValuePair = {
    key: 'items',
    value: ['a', 'b', 'c'],
    stringifiedValue: '[...]',
    path: 'items',
    depth: 1,
    isExpandable: true,
    isExpanded: false,
  }
  const result = GetKeyValuePairVirtualDom.getKeyValuePairVirtualDom(pair)
  expect(result).toHaveLength(8)
  expect(result[0]).toEqual({
    childCount: 4,
    className: ClassNames.IframeInspectorSelectedContentItem,
    paddingLeft: '20px',
    type: VirtualDomElements.Li,
  })
  expect(result[7]).toEqual({
    childCount: 0,
    text: '[...]',
    type: VirtualDomElements.Text,
  })
})

test('GetKeyValuePairVirtualDom - with depth', () => {
  const pair: SelectedMessageKeyValuePair = {
    key: 'nested',
    value: { a: 1 },
    stringifiedValue: '{...}',
    path: 'nested',
    depth: 2,
    isExpandable: true,
    isExpanded: false,
  }
  const result = GetKeyValuePairVirtualDom.getKeyValuePairVirtualDom(pair)
  expect(result).toHaveLength(8)
  expect(result[0]).toEqual({
    childCount: 4,
    className: ClassNames.IframeInspectorSelectedContentItem,
    paddingLeft: '40px',
    type: VirtualDomElements.Li,
  })
})
