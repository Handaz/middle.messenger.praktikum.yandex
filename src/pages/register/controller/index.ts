import RegisterAPI from '../api';
// import Router from '../../../utils/classes/router';
import { RegisterForm, RegisterProps } from '../types';

import validationSchema from '../../../utils/data/userValidationSchema';
import handleSubmit from '../../../utils/functions/handleSubmit';

const registerApi = new RegisterAPI();

class RegisterController {
  public async register({ fields, e }: RegisterProps) {
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

      // const validateData = userregisterValidator(data);

      // if (!validateData.isCorrect) {
      //   throw new Error(validateData);
      // }

      if (!isValid) {
        throw new Error('Invalid data');
      }
      console.log(data);
      const userID = registerApi.request(data);
      console.log(userID);

      // Router.go('/chats');

      // Останавливаем крутилку
    } catch (error) {
      console.log(error);
      // Логика обработки ошибок
    }
  }
}

export default new RegisterController();
