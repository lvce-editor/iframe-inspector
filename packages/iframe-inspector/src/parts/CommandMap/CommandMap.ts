import * as GetCommandIds from '../GetCommandIds/GetCommandIds.ts'
import * as RenderEventListeners from '../RenderEventListeners/RenderEventListeners.ts'

export const commandMap = {
  'IframeInspector.getCommandIds': GetCommandIds.getCommandIds,
  'IframeInspector.renderEventListeners': RenderEventListeners.renderEventListeners,
}
