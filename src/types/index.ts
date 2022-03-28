import type Loader from '../components/loader';

export type Nullable<T> = null | T;

export interface BlockProps {
  events?: {
    [key: string]: any;
  };
  blockClasses?: string | Indexed<string>;
  styles?: Partial<CSSStyleDeclaration>;
  loader?: boolean;
  loaderComponent?: typeof Loader;
}

export interface ValidationSchema {
  [key: string]: {
    rule: RegExp | { equal: string } | ((params?: unknown) => unknown);
    error: string;
  };
}

export type FormValues = {
  [key: string]: string;
};

export type Indexed<T = any> = {
  [key in string]: T;
};
