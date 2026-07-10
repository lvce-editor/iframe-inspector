import type { IframeInspectorState } from '../IframeInspectorState/IframeInspectorState.ts'
import * as ViewletRegistry from '../ViewletRegistry/ViewletRegistry.ts'

export const { dispose, get, getKeys, set } = ViewletRegistry.create<IframeInspectorState>()
