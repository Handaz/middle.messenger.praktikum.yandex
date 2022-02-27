import setFormError from '../functions/setFormError';
import { FormControllerProps } from '../../modules/controller';

export default function catchDec(
  _target: any,
  _propertyKey: string,
  descriptor: PropertyDescriptor,
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: FormControllerProps[]) {
    try {
      const result = originalMethod.apply(this, args);
      if (result && result instanceof Promise) {
        return result.catch((error) => {
          console.log(error);
          if (typeof error === 'object' && error !== null) {
            setFormError(args[0].fields, error.reason);
          }
        });
      }

      return result;
    } catch (error) {
      console.log(error);
    }
  };

  return descriptor;
}
