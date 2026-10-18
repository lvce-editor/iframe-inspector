import * as ApplyRender from '../ApplyRender/ApplyRender.ts'
import * as Diff2 from '../Diff2/Diff2.ts'
import * as IframeInspectorViewStates from '../IframeInspectorViewStates/IframeInspectorViewStates.ts'
import { queueRender } from '../QueueRender/QueueRender.ts'
import * as RendererProcess from '../RendererProcess/RendererProcess.ts'

export const render2 = (uid: number, diffResult: readonly number[]): readonly any[] | Promise<readonly any[]> => {
  const pendingDiffs = [...new Set([...diffResult, ...Diff2.diff2(uid)])]
  const { newState, oldState } = IframeInspectorViewStates.get(uid)
  const commands = ApplyRender.applyRender(oldState, newState, pendingDiffs)
  if (!RendererProcess.isConnected()) {
    IframeInspectorViewStates.set(uid, newState, newState)
    return commands
  }
  const adjusted = commands.map((command) => {
    if (command[0] === 'Viewlet.setDom2' || command[0] === 'Viewlet.focusSelector') {
      return [command[0], uid, ...command.slice(1)]
    }
    return ['Viewlet.send', uid, ...command]
  })
  return queueRender(uid, adjusted, oldState, newState)
}
