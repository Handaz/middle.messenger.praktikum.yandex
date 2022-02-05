import Block from '../../modules/block';

import ContentBlock from '../../components/contentBlock';
import Button from '../../components/button';
import Input from '../../components/form/input';
import Form from '../../components/form';
import Link from '../../components/link';

import { ILogin } from './types';
import authorization from '../../layouts/authorization';
import fieldsData from './utils';
import render from '../../utils/renderDom';

class Login extends Block {
  constructor(props: ILogin) {
    super(authorization.template, props);
  }

  render() {
    return this.compile({
      form: this.props.form,
      link: this.props.link,
    });
  }
}

const button = new Button({
  content: 'Sign in',
  type: 'submit',
  events: {
    click: () => console.log('a'),
  },
});

const fields = fieldsData.map(
  ({ name, placeholder, type }) => new Input({ name, placeholder, type }),
);

const form = new Form({
  vertical: true,
  fields,
  button,
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

// const login = authorization.render({
//   form: loginForm(),
//   link: link.render({ content: 'Sign up', url: './register.html' }),
// });

// const loginForm = () => {
//   const fields = fieldsData.map(({ name, placeholder, type }) =>
//     input.render({ name, placeholder, type }),
//   );
//   const form = emptyForm.render({
//     fields,
//     button: loginButton,
//     vertical: true,
//   });
//   const content = contentBlock.render({
//     title: 'Sign in',
//     content: form,
//   });
//   const template = Handlebars.compile(loginFormTmpl, {
//     noEscape: true,
//   });

//   return template({ content });
// };
