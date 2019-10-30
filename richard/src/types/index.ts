export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type IndexedObject<V = any> = { [k: string]: V };

export enum ERouterPath {
  home = 'home',
  pepe = 'pepe'
}
