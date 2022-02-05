import Block from '../../modules/block';
import Navigation from '../../modules/navigation';
import ProfileInfo from './modules/profileInfo';

import Sidebar from '../../components/sidebar';
import Link from '../../components/link';
import Avatar from '../../components/avatar';

import { IProfile } from './types';
import { profileLinks, profileFields } from './utils';
import profilePicture from '../../../static/images/profilePicture.png';
import profile from '../../layouts/profile';
import render from '../../utils/renderDom';

class Profile extends Block {
  constructor(props: IProfile) {
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
  content: 'Back to chats',
  url: 'chatSelect.html',
});

const navigation = new Navigation({
  link,
});

const sidebar = new Sidebar({
  content: navigation,
});

const links = profileLinks.map(
  ({ url, content }) => new Link({ url, content }),
);

const avatar = new Avatar({
  source: profilePicture,
});

const profileInfo = new ProfileInfo({
  avatar,
  links,
  username: 'test',
  profileFields,
});

const content = new Profile({
  sidebar,
  content: profileInfo,
});

render('#root', content);

// import Handlebars from 'handlebars';
// import profileInfoTmpl from './profileInfo.tmpl';
// import link from '../../../../components/link';
// import avatar from '../../../../components/avatar';
// import { profileFields, profileLinks } from '../../utils';

// const profileInfo = () => {
//   const template = Handlebars.compile(profileInfoTmpl, {
//     noEscape: true,
//   });
//   const links = profileLinks.map(({ url, content }) =>
//     link.render({ url, content }),
//   );

//   const content = template({
//     avatar: avatar.render({
//       source: require('../../../../../static/images/profilePicture.png'),
//     }),
//     username: 'test',
//     profileFields,
//     links,
//   });

//   return content;
// };

// import profile from '../../layouts/profile';
// import navigation from '../../modules/navigation';
// import profileInfo from './modules/profileInfo';

// const profileContent = profile.render({
//   sidebar: navigation(),
//   content: profileInfo(),
// });

// const root = document.querySelector('#root');

// if (root) {
//   root.innerHTML = profileContent;
// }
