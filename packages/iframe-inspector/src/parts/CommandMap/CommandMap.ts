import * as Create from '../Create/Create.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as HandleClick from '../HandleClick/HandleClick.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render from '../Render/Render.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'

export const commandMap = {
  'IframeInspector.getCommandIds': GetCommandIds.getCommandIds,
  'IframeInspector.create': Create.create,
  'IframeInspector.loadContent': LoadContent.loadContent,
  'IframeInspector.handleClick': HandleClick.handleClick,
  'IframeInspector.renderEventListeners': RenderEventListeners.renderEventListeners,
  'IframeInspector.render': Render.doRender,
  'IframeInspector.selectIndex': SelectIndex.selectIndex,
}
