import { ValidationSchema } from '../../../../../types';

const messageRule = /^(?!\s*$)[a-zA-Z.+\s'-]+$/g;

const validationSchema: ValidationSchema = {
  message: {
    rule: messageRule,
    error: '',
  },
};

export default validationSchema;
