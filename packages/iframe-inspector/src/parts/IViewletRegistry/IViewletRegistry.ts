import type { StateTuple } from '../StateTuple/StateTuple.ts'

export interface IViewletRegistry<T> {
  readonly dispose: (uid: number) => void
  readonly get: (uid: number) => StateTuple<T>
  readonly getKeys: () => readonly number[]
  readonly set: (uid: number, oldState: T, newState: T) => void
}
