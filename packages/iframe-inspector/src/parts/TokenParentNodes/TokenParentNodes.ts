import type { VirtualDomNode } from '../VirtualDomNode/VirtualDomNode.ts'
import * as TokenType from '../TokenType/TokenType.ts'
import * as VirtualDomElements from '../VirtualDomElements/VirtualDomElements.ts'

export const Comment: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token ${TokenType.Comment}`,
  childCount: 1,
}

export const CurlyClose: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token ${TokenType.CurlyClose}`,
  childCount: 1,
}

export const JsonPropertyName: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token ${TokenType.JsonPropertyName}`,
  childCount: 1,
}

export const JsonPropertyValueString: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token ${TokenType.JsonPropertyValueString}`,
  childCount: 1,
}

export const languageConstant: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token ${TokenType.LanguageConstant}`,
  childCount: 1,
}

export const Numeric: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token ${TokenType.Numeric}`,
  childCount: 1,
}

export const Punctuation: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token ${TokenType.Punctuation}`,
  childCount: 1,
}

export const String: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token ${TokenType.String}`,
  childCount: 1,
}

export const Text: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token ${TokenType.Text}`,
  childCount: 1,
}

export const Whitespace: VirtualDomNode = {
  type: VirtualDomElements.Span,
  className: `Token ${TokenType.Whitespace}`,
  childCount: 1,
}
