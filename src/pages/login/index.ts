import Button from '../../components/button';
import Block from '../../modules/block';
import Input from '../../components/form/input';
import Form from '../../components/form';
import LoginForm from './modules/loginForm';
import authorization from '../../layouts/authorization';
import fieldsData from './utils';
import render from '../../utils/renderDom';

class Login extends Block {
  constructor(props: any) {
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

const loginForm = new LoginForm({
  content: form,
});

const login = new Login({
  form: loginForm,
  // link: link.render({ content: 'Sign up', url: './register.html' }),
});

setTimeout(() => {
  button.setProps({
    events: {
      click: () => console.log('b'),
    },
  });
}, 3000);

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

render('#root', login);
