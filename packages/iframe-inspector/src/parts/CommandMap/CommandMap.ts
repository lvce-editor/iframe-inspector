import * as Create from '../Create/Create.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as HandleArrowDown from '../HandleArrowDown/HandleArrowDown.ts'
import * as HandleArrowUp from '../HandleArrowUp/HandleArrowUp.ts'
import * as HandleClick from '../HandleClick/HandleClick.ts'
import * as HandleEnd from '../HandleEnd/HandleEnd.ts'
import * as HandleHome from '../HandleHome/HandleHome.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render from '../Render/Render.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'

export const commandMap = {
  'IframeInspector.getCommandIds': GetCommandIds.getCommandIds,
  'IframeInspector.create': Create.create,
  'IframeInspector.loadContent': LoadContent.loadContent,
  'IframeInspector.handleClick': HandleClick.handleClick,
  'IframeInspector.handleArrowDown': HandleArrowDown.handleArrowDown,
  'IframeInspector.handleArrowUp': HandleArrowUp.handleArrowUp,
  'IframeInspector.handleHome': HandleHome.handleHome,
  'IframeInspector.handleEnd': HandleEnd.handleEnd,
  'IframeInspector.renderEventListeners': RenderEventListeners.renderEventListeners,
  'IframeInspector.render': Render.doRender,
  'IframeInspector.selectIndex': SelectIndex.selectIndex,
}
