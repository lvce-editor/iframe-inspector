import type { Renderer } from '../Renderer/Renderer.ts'
import * as DiffType from '../DiffType/DiffType.ts'
import * as RenderMessages from '../RenderMessages/RenderMessages.ts'

export const getRenderer = (diffType: number): Renderer => {
  switch (diffType) {
    case DiffType.RenderItems:
      return RenderMessages.renderMessage
    default:
      throw new Error('unknown renderer')
  }
}
