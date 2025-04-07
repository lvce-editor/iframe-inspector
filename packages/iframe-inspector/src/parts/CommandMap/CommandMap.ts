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
import * as HandleListBlur from '../HandleListBlur/HandleListBlur.ts'
import * as HandleListFocus from '../HandleListFocus/HandleListFocus.ts'
import * as HandleResizer from '../HandleResizer/HandleResizer.ts'
import * as HandleSelectedContentClick from '../HandleSelectedContentClick/HandleSelectedContentClick.ts'
import * as HandleWheel from '../HandleWheel/HandleWheel.ts'
import * as LoadContent from '../LoadContent/LoadContent.ts'
import * as Render2 from '../Render2/Render2.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'
import * as RestoreState from '../RestoreState/RestoreState.ts'
import * as SaveState from '../SaveState/SaveState.ts'
import * as SelectIndex from '../SelectIndex/SelectIndex.ts'
import * as Terminate from '../Terminate/Terminate.ts'
import * as WrapCommand from '../WrapCommand/WrapCommand.ts'

export const commandMap = {
  'IframeInspector.create': Create.create,
  'IframeInspector.diff2': Diff2.diff2,
  'IframeInspector.dispose': Dispose.dispose,
  'IframeInspector.getCommandIds': GetCommandIds.getCommandIds,
  'IframeInspector.getKeyBindings': GetKeyBindings.getKeyBindings,
  'IframeInspector.handleArrowDown': WrapCommand.wrapCommand(HandleArrowDown.handleArrowDown),
  'IframeInspector.handleArrowUp': WrapCommand.wrapCommand(HandleArrowUp.handleArrowUp),
  'IframeInspector.handleBlur': WrapCommand.wrapCommand(HandleBlur.handleBlur),
  'IframeInspector.handleClick': WrapCommand.wrapCommand(HandleClick.handleClick),
  'IframeInspector.handleEnd': WrapCommand.wrapCommand(HandleEnd.handleEnd),
  'IframeInspector.handleFilterInput': WrapCommand.wrapCommand(HandleFilterInput.handleFilterInput),
  'IframeInspector.handleFocus': WrapCommand.wrapCommand(HandleFocus.handleFocus),
  'IframeInspector.handleHome': WrapCommand.wrapCommand(HandleHome.handleHome),
  'IframeInspector.handleListBlur': WrapCommand.wrapCommand(HandleListBlur.handleListBlur),
  'IframeInspector.handleListFocus': WrapCommand.wrapCommand(HandleListFocus.handleListFocus),
  'IframeInspector.handleResizerMouseDown': WrapCommand.wrapCommand(HandleResizer.handleResizerMouseDown),
  'IframeInspector.handleResizerMouseMove': WrapCommand.wrapCommand(HandleResizer.handleResizerMouseMove),
  'IframeInspector.handleResizerMouseUp': WrapCommand.wrapCommand(HandleResizer.handleResizerMouseUp),
  'IframeInspector.handleSelectedContentClick': WrapCommand.wrapCommand(HandleSelectedContentClick.handleSelectedContentClick),
  'IframeInspector.handleWheel': WrapCommand.wrapCommand(HandleWheel.handleWheel),
  'IframeInspector.loadContent': LoadContent.loadContent,
  'IframeInspector.render2': Render2.render2,
  'IframeInspector.renderEventListeners': RenderEventListeners.renderEventListeners,
  'IframeInspector.restoreState': RestoreState.restoreState,
  'IframeInspector.saveState': SaveState.saveState,
  'IframeInspector.selectIndex': WrapCommand.wrapCommand(SelectIndex.selectIndex),
  'IframeInspector.terminate': Terminate.terminate,
}
