import type { Renderer } from '../Renderer/Renderer.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as RenderFocus from '../RenderFocus/RenderFocus.ts'
import * as RenderHeights from '../RenderHeights/RenderHeights.ts'
import * as RenderMessages from '../RenderMessages/RenderMessages.ts'

export const getRenderer = (diffType: number): Renderer => {
  switch (diffType) {
    case DiffType.RenderItems:
      return RenderMessages.renderMessage
    case DiffType.RenderHeights:
      return RenderHeights.renderHeights
    case DiffType.RenderFocus:
      return RenderFocus.renderFocus
    default:
      throw new Error('unknown renderer')
  }
}
