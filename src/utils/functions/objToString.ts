import isPlainObject from './isPlainObject';
import { Indexed } from '../../types';

export default function objToString(obj: Indexed): string {
  if (!isPlainObject(obj)) {
    throw new Error(`${obj} is not a plain object`);
  }

  return Object.entries(obj).reduce((acc, [key, val]) => {
    if (isPlainObject(val)) {
      acc += objToString(val);
    }
    acc += `${key}:${val};`;

    return acc;
  }, '');
}
