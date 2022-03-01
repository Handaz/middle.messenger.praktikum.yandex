import { ValidationSchema } from '../../../../../types';
import { noEmptyRule } from '../../../../../utils/data/userValidationSchema';

const validationSchema: ValidationSchema = {
  login: {
    rule: noEmptyRule,
    error: "Enter user's login",
  },
};
export default validationSchema;
