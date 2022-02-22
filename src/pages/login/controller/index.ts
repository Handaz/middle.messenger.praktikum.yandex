import LoginAPI from '../api';
// import Router from '../../../utils/classes/router';
import { ILoginForm } from '../types';

const loginApi = new LoginAPI();

class LoginController {
  public async login(data: ILoginForm) {
    try {
      // Запускаем крутилку

      // const validateData = userLoginValidator(data);

      // if (!validateData.isCorrect) {
      //   throw new Error(validateData);
      // }

      const userID = loginApi.request(data);
      console.log(userID);
      // Router.getInstance().go('/chats');

      // Останавливаем крутилку
    } catch (error) {
      // Логика обработки ошибок
    }
  }
}

export default new LoginController();
