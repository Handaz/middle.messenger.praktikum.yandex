import Block from '../../modules/block';
import PasswordForm from './modules/passwordForm';
import Navigation from '../../modules/navigation';

import Sidebar from '../../components/sidebar';
import Button from '../../components/button';
import Input from '../../components/form/input';
import Form from '../../components/form';
import Link from '../../components/link';
import Avatar from '../../components/avatar';

import { IPasswordChange } from './types';
import profile from '../../layouts/profile';
import userAvatar from '../../../static/images/userAvatar.png';
import fieldsData from './utils';
import render from '../../utils/renderDom';

class PasswordChange extends Block {
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
  content: 'Back to profile',
  url: 'profile.html',
});

const navigation = new Navigation({
  link,
});

const sidebar = new Sidebar({
  content: navigation,
});

const fields = fieldsData.map(
  ({ name, placeholder, type }) => new Input({ name, placeholder, type }),
);

const button = new Button({
  type: 'submit',
  content: 'Save',
});

const form = new Form({
  fields,
  button,
  vertical: true,
});

const avatar = new Avatar({
  source: userAvatar,
});

const passwordForm = new PasswordForm({
  avatar,
  form,
});

const content = new PasswordChange({
  sidebar,
  content: passwordForm,
});

render('#root', content);

// import Handlebars from 'handlebars';
// import passwordFormTmpl from './passwordForm.tmpl';
// import form from '../../../../components/form';
// import input from '../../../../components/form/input';
// // import button from '../../../../components/button';
// import avatar from '../../../../components/avatar';
// import fieldsData from './utils';

// const passwordForm = () => {
//   const template = Handlebars.compile(passwordFormTmpl, {
//     noEscape: true,
//   });

//   const fields = fieldsData.map(({ name, placeholder, type }) =>
//     input.render({ name, placeholder, type }),
//   );

//   const content = template({
//     avatar: avatar.render({
//       source: require('../../../../../static/images/profilePicture.png'),
//     }),
//     form: form.render({
//       fields,
//       // button: button.render({ type: 'submit', content: 'Save' }),
//       vertical: true,
//     }),
//   });

//   return content;
// };

// import profile from '../../layouts/profile';
// import navigation from '../../modules/navigation';
// import passwordForm from './modules/passwordForm';

// const passwordChange = profile.render({
//   sidebar: navigation(),
//   content: passwordForm(),
// });

// const root = document.querySelector('#root');

// if (root) {
//   root.innerHTML = passwordChange;
// }
