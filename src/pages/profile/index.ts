import Block from '../../modules/block';
import { ProfileInfoModule } from './modules/profileInfo';

import Navigation from '../../components/navigation';
import Sidebar from '../../components/sidebar';
import Link from '../../components/link';

import profile from '../../layouts/profile';
import { IProfile } from './types';

class Profile extends Block<IProfile> {
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
  url: '/',
});

const navigation = new Navigation({
  link,
});

const sidebar = new Sidebar({
  content: navigation,
});

const profileInfo = ProfileInfoModule();

export default new Profile({
  sidebar,
  content: profileInfo,
});
