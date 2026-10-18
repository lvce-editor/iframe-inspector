import * as ViewletRegistry from '@lvce-editor/viewlet-registry'
import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'

export const { createDirectEventCommandMap, dispose, get, getKeys, registerCommands, set, wrapSerialCommand } =
  ViewletRegistry.create<IframeInspectorState>()
