import { measureMemory } from '@lvce-editor/measure-memory'
import { playwrightPath, threshold, workerPath, instantiations, instantiationsPath } from './config.ts'

const main = async () => {
  process.env.npm_config_workspace = '@lvce-editor/iframe-inspector'
  await measureMemory({
    playwrightPath,
    workerPath,
    threshold,
    instantiations,
    instantiationsPath,
  })
}

main()
