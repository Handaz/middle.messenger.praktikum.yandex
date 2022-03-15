import Block from '../../modules/block';

import ContentBlock from '../../components/contentBlock';
import Button from '../../components/button';
import Input from '../../components/form/input';
import Form from '../../components/form';
import Link from '../../components/link';
import FormError from '../../components/form/error';

import authorization from '../../layouts/authorization';
import { ILogin } from './types';
import { fieldsData, validationSchema } from './utils';
import handleInputChange from '../../utils/functions/handleInputChange';
import validateField from '../../utils/functions/validateField';
import LoginController from './controller';

class Login extends Block<ILogin> {
  constructor(props: ILogin) {
    super(authorization.template, props);
  }

  render() {
    const { form } = this.props;

    return this.compile({
      form,
    });
  }
}

const button = new Button({
  content: 'Sign in',
  type: 'submit',
});

const fields = fieldsData.map(({ name, placeholder, type }) => ({
  input: new Input({
    name,
    placeholder,
    type,
  }),
  error: new FormError({ error: '' }),
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

const form = new Form({
  vertical: true,
  fields,
  button,
  events: {
    submit: (e: SubmitEvent) => LoginController.login({ fields, e }),
  },
});

const link = new Link({ content: 'Sign up', url: 'register' });

const loginForm = new ContentBlock({
  title: 'Sign in',
  content: form,
  link,
  authForm: true,
});

export default new Login({
  form: loginForm,
});
