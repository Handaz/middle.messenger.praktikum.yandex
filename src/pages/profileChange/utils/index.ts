import { ProfileFormModule } from '../../../modules/profileForm';

import FormError from '../../../components/form/error';
import Input from '../../../components/form/input';
import { IInput } from '../../../components/form/input/types';
import Label from '../../../components/form/label';

import handleInputChange from '../../../utils/functions/handleInputChange';
import validateField from '../../../utils/functions/validateField';
import validationSchema from '../../../utils/data/userValidationSchema';
import { Indexed } from '../../../types';

const fieldsData: IInput[] = [
  { name: 'email', placeholder: 'Email', type: 'email' },
  { name: 'login', placeholder: 'Login', type: 'text' },
  { name: 'first_name', placeholder: 'Name', type: 'text' },
  { name: 'second_name', placeholder: 'Surname', type: 'text' },
  { name: 'display_name', placeholder: 'Chat name', type: 'text' },
  { name: 'phone', placeholder: 'Phone', type: 'text' },
];

const mapStateToProfileChange = ({ user }: Indexed) => {
  const fields = fieldsData.map(({ name, placeholder, type }) => ({
    input: new Input({
      name,
      placeholder,
      type,
      value: user ? user[name] : '',
      noautocomplete: true,
      profile: true,
    }),
    error: new FormError({ profile: true }),
    label: new Label({ label: placeholder, regular: true, name }),
  }));

  fields.forEach(({ input, error }) => {
    input.setProps({
      events: {
        blur: (e: FocusEvent) => {
          handleInputChange(input, e);
          validateField(input, error, validationSchema, fields);
        },
      },
    });
  });

  return {
    content: ProfileFormModule(fields, 'profile'),
  };
};

export default mapStateToProfileChange;
