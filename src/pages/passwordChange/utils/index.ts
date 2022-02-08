import { IInput } from '../../../components/form/input/types';

const fieldsData: IInput[] = [
  { name: 'oldPassword', placeholder: 'Old password', type: 'password' },
  { name: 'newPassword', placeholder: 'New password', type: 'password' },
  {
    name: 'newPasswordConfirm',
    placeholder: 'Confirm password',
    type: 'password',
  },
];

export default fieldsData;
