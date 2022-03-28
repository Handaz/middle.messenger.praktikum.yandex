import { Indexed } from '../../types';

function handleObj(obj: Indexed<unknown>) {
  return Object.entries(obj).reduce<string[]>((acc, [k, v]) => {
    if (v) {
      acc.push(k);
    }
    return acc;
  }, []);
}

type ClassNames = Indexed<unknown> | string | number | ClassNames[];

function classNames(...args: ClassNames[]) {
  if (!args || args.length === 0) {
    return '';
  }

  let className: (string | number)[] = [];

  args.forEach((arg) => {
    if (Array.isArray(arg)) {
      if (arg.length) {
        const inner = classNames(...arg);
        if (inner) className.push(inner);
      }
    } else if (typeof arg === 'object' && arg !== null) {
      const objClasses = handleObj(arg);
      className = className.concat(objClasses);
    } else if (arg) {
      className.push(arg);
    }
  });

  return className.join(' ');
}

export default classNames;
