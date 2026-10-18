import { join } from 'node:path'
import { root } from './root.ts'

export const threshold = 457_000

export const instantiations = 4500

export const instantiationsPath = join(root, 'packages', 'iframe-inspector')

export const workerPath = join(root, '.tmp/dist/dist/iframeInspectorWorkerMain.js')

export const playwrightPath = import.meta.resolve('playwright')
