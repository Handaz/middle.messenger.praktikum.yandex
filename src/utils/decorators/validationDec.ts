import handleSubmit from '../functions/handleSubmit';
import { FormControllerProps } from '../../types/controller';
import { FormValues, ValidationSchema } from '../../types';

export default function catchDec(validationSchema: ValidationSchema) {
  return function <T extends FormValues>(
    target: any,
    _propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: FormControllerProps[]) {
      const { fields, e } = args[0];
      const { data, isValid } = handleSubmit<T>({
        fields,
        e,
        validationSchema,
      });

      if (isValid && target) {
        target.data = data;
        originalMethod.apply(this, args);
      }
    };
    return descriptor;
  };
}
