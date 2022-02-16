import BaseAPI from '../../../utils/classes/baseApi';
import apiCall from '../../../utils/classes/request';

class LoginAPI extends BaseAPI {
  public request(user: any) {
    return apiCall
      .post<any, any>('/login', user)
      .then(({ user_id }) => user_id); // Обрабатываем получение данных из сервиса далее
  }
}
