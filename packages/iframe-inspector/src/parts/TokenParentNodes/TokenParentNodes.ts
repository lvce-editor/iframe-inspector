import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const Comment: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token Comment`,
  childCount: 1,
}

export const CurlyClose: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token CurlyClose`,
  childCount: 1,
}

export const JsonPropertyName: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token JsonPropertyName`,
  childCount: 1,
}

export const JsonPropertyValueString: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token JsonPropertyValueString`,
  childCount: 1,
}

export const languageConstant: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token LanguageConstant`,
  childCount: 1,
}

export const Numeric: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token Numeric`,
  childCount: 1,
}

export const Punctuation: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token Punctuation`,
  childCount: 1,
}

export const String: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token String`,
  childCount: 1,
}

export const Text: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token Text`,
  childCount: 1,
}

export const Whitespace: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token Whitespace`,
  childCount: 1,
}
