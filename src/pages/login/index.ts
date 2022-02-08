import Block from '../../modules/block';

import ContentBlock from '../../components/contentBlock';
import Button from '../../components/button';
import Input from '../../components/form/input';
import Form from '../../components/form';
import Link from '../../components/link';
import FormError from '../../components/form/error';

import authorization from '../../layouts/authorization';
import { ILogin } from './types';
import fieldsData from './utils';
import handleSubmit from '../../utils/functions/handleSubmit';
import render from '../../utils/functions/renderDom';
import handleInputChange from '../../utils/functions/handleInputChange';

class Login extends Block<ILogin> {
  constructor(props: ILogin) {
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

fields.forEach(({ input }) => {
  input.setProps({
    events: {
      blur: (e: FocusEvent) => {
        handleInputChange(input, e);
      },
    },
  });
});

const form = new Form({
  vertical: true,
  fields,
  button,
  events: {
    submit: (e: SubmitEvent) => handleSubmit({ fields, e }),
  },
});

const link = new Link({ content: 'Sign up', url: './register.html' });

const loginForm = new ContentBlock({
  title: 'Sign in',
  content: form,
  authForm: true,
});

const content = new Login({
  form: loginForm,
  link,
});

render('#root', content);
