import { ILink } from '../../../../../components/link/types';
import { IProfileField } from '../types';

export const fields: IProfileField[] = [
  { label: 'Email', value: 'test@yandex.ru' },
  { label: 'Login', value: 'test' },
  { label: 'Name', value: 'testName' },
  { label: 'Surname', value: 'testSurname' },
  { label: 'Chat name', value: 'testChatName' },
  { label: 'Phone', value: 'testPhoneNumber' },
];

export const profileLinks: ILink[] = [
  { url: 'profileChange.html', content: 'Change profile' },
  { url: 'passwordChange.html', content: 'Change password' },
  { url: 'login.html', content: 'Sign out' },
];
