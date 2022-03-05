import { IInput } from '../../../components/form/input/types';

export const fieldsData: IInput[] = [
  { name: 'login', placeholder: 'Login', type: 'text' },
  { name: 'password', placeholder: 'Password', type: 'password' },
];

const noEmptyString = /([^\s])/g;

export const validationSchema = {
  login: {
    rule: noEmptyString,
    error: 'Enter login',
  },
  password: {
    rule: noEmptyString,
    error: 'Enter password',
  },
};
