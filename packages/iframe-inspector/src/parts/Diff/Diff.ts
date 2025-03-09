import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as DiffModules from '../DiffModules/DiffModules.ts'

export const diff = (oldState: IframeInspectorState, newState: IframeInspectorState): readonly number[] => {
  const diffResult: number[] = []
  for (const module of DiffModules.modules) {
    if (!module.isEqual(oldState, newState)) {
      diffResult.push(module.diffType)
    }
  }
  return diffResult
}
