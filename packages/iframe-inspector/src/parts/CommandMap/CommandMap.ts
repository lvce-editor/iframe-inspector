import * as Create from '../Create/Create.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as Dispose from '../Dispose/Dispose.ts'
import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as GetKeyBindings from '../GetKeyBindings/GetKeyBindings.ts'
import * as HandleArrowDown from '../HandleArrowDown/HandleArrowDown.ts'
import * as HandleArrowUp from '../HandleArrowUp/HandleArrowUp.ts'
import * as HandleBlur from '../HandleBlur/HandleBlur.ts'
import * as HandleClick from '../HandleClick/HandleClick.ts'
import * as HandleEnd from '../HandleEnd/HandleEnd.ts'
import * as HandleFilterInput from '../HandleFilterInput/HandleFilterInput.ts'
import * as HandleFocus from '../HandleFocus/HandleFocus.ts'
import * as HandleHome from '../HandleHome/HandleHome.ts'
import * as HandleResizer from '../HandleResizer/HandleResizer.ts'
import * as HandleSelectedContentClick from '../HandleSelectedContentClick/HandleSelectedContentClick.ts'
import * as HandleWheel from '../HandleWheel/HandleWheel.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render2 from '../Render2/Render2.ts'
import * as Render from '../Render/Render.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as RestoreState from '../RestoreState/RestoreState.ts'
import * as SaveState from '../SaveState/SaveState.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'
import * as Terminate from '../Terminate/Terminate.ts'

export const commandMap = {
  'IframeInspector.create': Create.create,
  'IframeInspector.diff2': Diff2.diff2,
  'IframeInspector.dispose': Dispose.dispose,
  'IframeInspector.render2': Render2.render2,
  'IframeInspector.getCommandIds': GetCommandIds.getCommandIds,
  'IframeInspector.getKeyBindings': GetKeyBindings.getKeyBindings,
  'IframeInspector.handleArrowDown': HandleArrowDown.handleArrowDown,
  'IframeInspector.handleArrowUp': HandleArrowUp.handleArrowUp,
  'IframeInspector.handleBlur': HandleBlur.handleBlur,
  'IframeInspector.handleClick': HandleClick.handleClick,
  'IframeInspector.handleEnd': HandleEnd.handleEnd,
  'IframeInspector.handleFilterInput': HandleFilterInput.handleFilterInput,
  'IframeInspector.handleFocus': HandleFocus.handleFocus,
  'IframeInspector.handleHome': HandleHome.handleHome,
  'IframeInspector.handleResizerMouseDown': HandleResizer.handleResizerMouseDown,
  'IframeInspector.handleResizerMouseMove': HandleResizer.handleResizerMouseMove,
  'IframeInspector.handleResizerMouseUp': HandleResizer.handleResizerMouseUp,
  'IframeInspector.handleSelectedContentClick': HandleSelectedContentClick.handleSelectedContentClick,
  'IframeInspector.handleWheel': HandleWheel.handleWheel,
  'IframeInspector.loadContent': LoadContent.loadContent,
  'IframeInspector.renderEventListeners': RenderEventListeners.renderEventListeners,
  'IframeInspector.restoreState': RestoreState.restoreState,
  'IframeInspector.saveState': SaveState.saveState,
  'IframeInspector.selectIndex': SelectIndex.selectIndex,
  'IframeInspector.terminate': Terminate.terminate,

  // deprecated
  'IframeInspector.render': Render.doRender,
}
