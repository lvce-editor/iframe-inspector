import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'

export interface Renderer {
  (oldState: IframeInspectorState, newState: IframeInspectorState): readonly any[]
}
