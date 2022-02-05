import Block from '../../modules/block';

import ContentBlock from '../../components/contentBlock';
import Button from '../../components/button';
import Input from '../../components/form/input';
import Form from '../../components/form';
import Link from '../../components/link';

import { IRegister } from './types';
import authorization from '../../layouts/authorization';
import fieldsData from './utils';
import render from '../../utils/renderDom';

class Register extends Block {
  constructor(props: IRegister) {
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
  content: 'Sign up',
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

// const register = authorization.render({
//   form: registerForm(),
//   link: link.render({ content: 'Sign up', url: './login.html' }),
// });

// const root = document.querySelector('#root');

// if (root) {
//   root.innerHTML = register;
// }

// const registerForm = () => {
//   // const registerButton = button.render({
//   //   content: 'Sign in',
//   //   type: 'submit',
//   // });

//   const fields = fieldsData.map(({ name, placeholder, type }) =>
//     input.render({ name, placeholder, type }),
//   );

//   const form = emptyForm.render({
//     fields,
//     // button: registerButton,
//     vertical: true,
//   });

//   const content = contentBlock.render({
//     title: 'Sign up',
//     content: form,
//   });

//   const template = Handlebars.compile(registerFormTmpl, {
//     noEscape: true,
//   });

//   return template({ content });
// };

// export default registerForm;
