enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

interface Options<P> {
  method: METHODS;
  data?: P;
  timeout?: number;
  headers?: Record<string, string>;
}

type OptionsWithoutMethod<P> = Omit<Options<P>, 'method'>;

const baseUrl = 'https://ya-praktikum.tech/api/v2/';

function queryStringify(data: Record<string, any>) {
  const entries = Object.entries(data);
  return `?${entries.reduce((acc, [key, value], index) => {
    acc += `${key}=${value}`;
    if (index !== entries.length - 1) {
      acc += '&';
    }
    return acc;
  }, '')}`;
}

class Request {
  get = <P, T>(
    url: string,
    options: OptionsWithoutMethod<P> = {},
  ): Promise<T> =>
    this.request(url, { ...options, method: METHODS.GET }, options.timeout);

  put = <P, T>(
    url: string,
    options: OptionsWithoutMethod<P> = {},
  ): Promise<T> =>
    this.request<P, T>(
      url,
      { ...options, method: METHODS.PUT },
      options.timeout,
    );

  post = <P, T>(
    url: string,
    options: OptionsWithoutMethod<P> = {},
  ): Promise<T> =>
    this.request<P, T>(
      url,
      { ...options, method: METHODS.POST },
      options.timeout,
    );

  delete = <P, T>(
    url: string,
    options: OptionsWithoutMethod<P> = {},
  ): Promise<T> =>
    this.request<P, T>(
      url,
      { ...options, method: METHODS.DELETE },
      options.timeout,
    );

  request = <P, T>(
    url: string,
    options: Options<P> = { method: METHODS.GET },
    timeout: number = 5000,
  ): Promise<T> => {
    const {
      method,
      data,
      headers = { 'Content-Type': 'application/json;charset=UTF-8' },
    } = options;
    let params = '';

    if (method === METHODS.GET && data) {
      params = queryStringify(data);
    }

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, `${baseUrl}${url}${params}`);

      xhr.onload = () => {
        if (xhr.status === 200) {
          resolve(xhr.response);
        } else {
          reject(xhr.response);
        }
      };

      Object.entries(headers).forEach(([header, val]) => {
        xhr.setRequestHeader(header, val);
      });

      xhr.withCredentials = true;

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  };
}

export default new Request();
