import Block from '../../modules/block';

import ContentBlock from '../../components/contentBlock';
import Button from '../../components/button';
import Input from '../../components/form/input';
import Form from '../../components/form';
import Link from '../../components/link';

import { IRegister } from './types';
import authorization from '../../layouts/authorization';
import { fieldsData, validationSchema } from './utils';
import render from '../../utils/renderDom';
import handleSubmit from '../../utils/handleSubmit';

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
    submit: (e: SubmitEvent) => handleSubmit.bind(fields)(e, validationSchema),
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
