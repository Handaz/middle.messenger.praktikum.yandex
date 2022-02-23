import RegisterAPI from '../api';
// import Router from '../../../utils/classes/router';
import { RegisterForm } from '../types';

import validationSchema from '../../../utils/data/userValidationSchema';
import handleSubmit from '../../../utils/functions/handleSubmit';
import { FormControllerProps } from '../../../types/controller';

const registerApi = new RegisterAPI();

class RegisterController {
  public async register({ fields, e }: FormControllerProps) {
    try {
      const {
        data: { passwordConfirm, ...data },
        isValid,
      } = handleSubmit<RegisterForm>({
        fields,
        e,
        validationSchema,
      });
      // Запускаем крутилку

      if (isValid) {
        const userID = await registerApi.request(data);
        console.log(userID);
      }

      // Router.go('/chats');

      // Останавливаем крутилку
    } catch (error) {
      console.log(error);
    }
  }
}

export default new RegisterController();
