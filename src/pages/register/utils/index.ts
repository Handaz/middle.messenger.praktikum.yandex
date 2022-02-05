import { IInput } from '../../../components/form/input/types';
import { ValidationSchema } from '../../../types';

export const fieldsData: IInput[] = [
  { name: 'email', placeholder: 'Email', type: 'email' },
  { name: 'login', placeholder: 'Login', type: 'text' },
  { name: 'first_name', placeholder: 'Name', type: 'text' },
  { name: 'second_name', placeholder: 'Surname', type: 'text' },
  { name: 'phone', placeholder: 'Phone', type: 'text' },
  { name: 'password', placeholder: 'Password', type: 'password' },
  {
    name: 'passwordConfirm',
    placeholder: 'Confirm password',
    type: 'password',
  },
];

const nameRule = /^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z-]+$/g;
const loginRule = /^(?=.*[a-zA-Z])([a-zA-Z0-9_-]{3,20})$/g;
const mailRule = /^[-.\/?*()!#&+\w\s]+[@][a-zA-Z]+[.][a-zA-Z]+$/g;
const passwordRule = /^(?=.*[0-9])(?=.*[A-Z])([a-zA-Z0-9_-]{8,40})$/g;
const phoneRule = /^[+]?[0-9]{10,15}$/g;

export const validationSchema: ValidationSchema = {
  first_name: {
    rule: nameRule,
    error: 'Name must start with a capital and include only letters (or -)',
  },
  second_name: {
    rule: nameRule,
    error: 'Surname must start with a capital and include only letters (or -)',
  },
  login: {
    rule: loginRule,
    error:
      'Login must have a length of 3-20 and not have whitespaces and special characters (excluding - and _)',
  },
  email: {
    rule: mailRule,
    error: 'Email must have @yourProvider.yourDomain at the end',
  },
  password: {
    rule: passwordRule,
    error:
      'Password must have a length of 8-40, including at least one capital letter and a number',
  },
  passwordConfirm: {
    rule: { equal: 'password' },
    error: "Passwords don't match",
  },
  phone: {
    rule: phoneRule,
    error:
      'Phone must have a length of 10-15 and include numbers (or + at the start)',
  },
};
