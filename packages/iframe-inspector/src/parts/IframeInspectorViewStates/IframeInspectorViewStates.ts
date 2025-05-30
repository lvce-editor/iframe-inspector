import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as ViewletRegistry from '../ViewletRegistry/ViewletRegistry.ts'

export const { get, set, dispose, getKeys } = ViewletRegistry.create<IframeInspectorState>()
