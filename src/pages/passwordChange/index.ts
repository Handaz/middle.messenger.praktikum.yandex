import Block from '../../modules/block';
import { ProfileFormModule } from '../../modules/profileForm';

import Navigation from '../../components/navigation';
import Sidebar from '../../components/sidebar';
import Input from '../../components/form/input';
import Link from '../../components/link';
import FormError from '../../components/form/error';
import Button from '../../components/button';

import profile from '../../layouts/profile';
import { IPasswordChange } from './types';
import fieldsData from './utils';
import validationSchema from '../../utils/data/userValidationSchema';
import handleInputChange from '../../utils/functions/handleInputChange';
import validateField from '../../utils/functions/validateField';
import arrow from '../../../static/icons/arrow';

class PasswordChange extends Block<IPasswordChange> {
  constructor(props: IPasswordChange) {
    super(profile.template, props);
  }

  render() {
    const { sidebar, content } = this.props;

    return this.compile({
      sidebar,
      content,
    });
  }
}

const link = new Link({
  content: new Button({
    type: 'button',
    content: arrow,
    round: true,
  }),
  url: 'profile',
});

const navigation = new Navigation({
  link,
});

const sidebar = new Sidebar({
  content: navigation,
});

const fields = fieldsData.map(({ name, placeholder, type }) => ({
  input: new Input({ name, placeholder, type }),
  error: new FormError({}),
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

const passwordForm = ProfileFormModule(fields, 'password');

export default new PasswordChange({
  sidebar,
  content: passwordForm,
});
