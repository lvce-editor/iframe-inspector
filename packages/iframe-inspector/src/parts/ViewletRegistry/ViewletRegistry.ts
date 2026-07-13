import type { IViewletRegistry } from '../IViewletRegistry/IViewletRegistry.ts'
import type { StateTuple } from '../StateTuple/StateTuple.ts'

export const create = <T>(): IViewletRegistry<T> => {
  const states = Object.create(null)

  return {
    dispose(uid: number): void {
      delete states[uid]
    },
    get(uid: number): StateTuple<T> {
      return states[uid]
    },
    getKeys(): readonly number[] {
      return Object.keys(states).map((key) => {
        return Number.parseInt(key)
      })
    },
    set(uid, oldState: T, newState: T): void {
      states[uid] = { newState, oldState }
    },
  }
}
