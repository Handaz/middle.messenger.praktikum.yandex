import BaseAPI from '../../../utils/classes/baseApi';
import apiCall from '../../../utils/classes/request';
import { IResourcesData } from './types';

class ConversationAPI extends BaseAPI<
  undefined | FormData,
  Promise<IResourcesData>
> {
  public async uploadFile(data: FormData) {
    const res = await apiCall.post<FormData, IResourcesData>('resources', {
      data,
    });

    return res;
  }
}

export default new ConversationAPI();
