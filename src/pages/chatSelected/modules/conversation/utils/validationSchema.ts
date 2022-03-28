import { ValidationSchema } from '../../../../../types';
import {
  isFile,
  noEmptyRule,
} from '../../../../../utils/data/userValidationSchema';

const validationSchema: ValidationSchema = {
  message: {
    rule: noEmptyRule,
    error: '',
  },
  file: {
    rule: isFile,
    error: '',
  },
};

export default validationSchema;
