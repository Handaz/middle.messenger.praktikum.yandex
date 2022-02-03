export type Nullable<T> = null | T;

export interface BlockProps {
  events?: {
    [key: string]: any;
  };
}
