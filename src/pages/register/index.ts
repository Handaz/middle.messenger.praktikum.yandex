import Block from '../../modules/block';

import ContentBlock from '../../components/contentBlock';
import Button from '../../components/button';
import Input from '../../components/form/input';
import Form from '../../components/form';
import Link from '../../components/link';
import FormError from '../../components/form/error';

import authorization from '../../layouts/authorization';
import { IRegister } from './types';
import RegisterController from './controller';
import fieldsData from './utils';
import validationSchema from '../../utils/data/userValidationSchema';
// import handleSubmit from '../../utils/functions/handleSubmit';
import handleInputChange from '../../utils/functions/handleInputChange';
import validateField from '../../utils/functions/validateField';

class Register extends Block<IRegister> {
  constructor(props: IRegister) {
    super(authorization.template, props);
  }

  render() {
    const { form, link } = this.props;

    return this.compile({
      form,
      link,
    });
  }
}
const button = new Button({
  content: 'Sign up',
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
    // submit: (e: SubmitEvent) => handleSubmit({ fields, e, validationSchema }),
    submit: (e: SubmitEvent) => RegisterController.register({ fields, e }),
  },
});

const link = new Link({ content: 'Sign in', url: 'login' });

const registerForm = new ContentBlock({
  title: 'Sign up',
  content: form,
  authForm: true,
});

export default new Register({
  form: registerForm,
  link,
});
