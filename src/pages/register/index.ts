import Block from '../../modules/block';

import ContentBlock from '../../components/contentBlock';
import Button from '../../components/button';
import Input from '../../components/form/input';
import Form from '../../components/form';
import Link from '../../components/link';

import authorization from '../../layouts/authorization';
import { IRegister } from './types';
import fieldsData from './utils';
import validationSchema from '../../utils/data/userValidationSchema';
import render from '../../utils/functions/renderDom';
import handleSubmit from '../../utils/functions/handleSubmit';

class Register extends Block {
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

const fields = fieldsData.map(
  ({ name, placeholder, type }) => new Input({ name, placeholder, type }),
);

const form = new Form({
  vertical: true,
  fields,
  button,
  events: {
    submit: (e: SubmitEvent) => handleSubmit({ fields, e, validationSchema }),
  },
});

const link = new Link({ content: 'Sign in', url: './login.html' });

const registerForm = new ContentBlock({
  title: 'Sign up',
  content: form,
  authForm: true,
});

const content = new Register({
  form: registerForm,
  link,
});

render('#root', content);
