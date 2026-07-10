import { test, expect } from '@jest/globals'
import type { SelectedMessageKeyValuePair } from '../src/parts/SelectedMessageViewModel/SelectedMessageViewModel.ts'
import * as ClassNames from '../src/parts/ClassNames/ClassNames.ts'
import * as GetKeyValuePairVirtualDom from '../src/parts/GetKeyValuePairVirtualDom/GetKeyValuePairVirtualDom.ts'
import * as VirtualDomElements from '../src/parts/VirtualDomElements/VirtualDomElements.ts'

test('GetKeyValuePairVirtualDom - empty object', () => {
  const pair: SelectedMessageKeyValuePair = {
    depth: 0,
    isExpandable: false,
    isExpanded: false,
    key: '',
    path: '',
    stringifiedValue: '',
    value: '',
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
    depth: 0,
    isExpandable: false,
    isExpanded: false,
    key: 'id',
    path: 'id',
    stringifiedValue: '"test-id"',
    value: 'test-id',
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
    depth: 0,
    isExpandable: true,
    isExpanded: false,
    key: 'style',
    path: 'style',
    stringifiedValue: '{...}',
    value: {
      backgroundColor: 'blue',
      color: 'red',
    },
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
    depth: 0,
    isExpandable: true,
    isExpanded: true,
    key: 'data',
    path: 'data',
    stringifiedValue: '{...}',
    value: {
      boolean: true,
      number: 42,
    },
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
    depth: 1,
    isExpandable: true,
    isExpanded: false,
    key: 'items',
    path: 'items',
    stringifiedValue: '[...]',
    value: ['a', 'b', 'c'],
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
    depth: 2,
    isExpandable: true,
    isExpanded: false,
    key: 'nested',
    path: 'nested',
    stringifiedValue: '{...}',
    value: { a: 1 },
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
