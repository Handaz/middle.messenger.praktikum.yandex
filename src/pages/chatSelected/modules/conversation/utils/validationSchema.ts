import { ValidationSchema } from '../../../../../types';
import { noEmptyRule } from '../../../../../utils/data/userValidationSchema';

const validationSchema: ValidationSchema = {
  message: {
    rule: noEmptyRule,
    error: '',
  },
};

export default validationSchema;
