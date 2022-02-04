import Block from '../../modules/block';
import ProfileForm from '../../modules/profileForm';
import Navigation from '../../modules/navigation';

import Sidebar from '../../components/sidebar';
import Button from '../../components/button';
import Input from '../../components/form/input';
import Form from '../../components/form';
import Link from '../../components/link';
import Avatar from '../../components/avatar';

import { IProfileChange } from './types';
import profile from '../../layouts/profile';
import profilePicture from '../../../static/images/profilePicture.png';
import fieldsData from './utils';
import render from '../../utils/renderDom';

class ProfileChange extends Block {
  constructor(props: IProfileChange) {
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
  source: profilePicture,
});

const passwordForm = new ProfileForm({
  avatar,
  form,
});

const content = new ProfileChange({
  sidebar,
  content: passwordForm,
});

render('#root', content);

// import Handlebars from 'handlebars';
// import profileFormTmpl from './profileForm.tmpl';
// import form from '../../../../components/form';
// import input from '../../../../components/form/input';
// // import button from '../../../../components/button';
// import avatar from '../../../../components/avatar';
// import fieldsData from '../../utils';

// const profileForm = () => {
//   const template = Handlebars.compile(profileFormTmpl, {
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

// export default profileForm;

// import profile from '../../layouts/profile';
// import navigation from '../../modules/navigation';
// import profileForm from './modules/profileForm';

// const profileChange = profile.render({
//   sidebar: navigation(),
//   content: profileForm(),
// });

// const root = document.querySelector('#root');

// if (root) {
//   root.innerHTML = profileChange;
// }
