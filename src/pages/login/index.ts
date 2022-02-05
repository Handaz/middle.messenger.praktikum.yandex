import Block from '../../modules/block';

import ContentBlock from '../../components/contentBlock';
import Button from '../../components/button';
import Input from '../../components/form/input';
import Form from '../../components/form';
import Link from '../../components/link';

import { ILogin } from './types';
import authorization from '../../layouts/authorization';
import fieldsData from './utils';
import getFormValues from '../../utils/getFormValues';
import render from '../../utils/renderDom';

class Login extends Block {
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

const fields = fieldsData.map(
  ({ name, placeholder, type }) => new Input({ name, placeholder, type }),
);

const form = new Form({
  vertical: true,
  fields,
  button,
  events: {
    submit: (e: SubmitEvent) => {
      e.preventDefault();
      console.log(getFormValues(e.target));
    },
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
