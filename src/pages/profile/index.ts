import Block from '../../modules/block';
import ProfileInfo from './modules/profileInfo';

import Navigation from '../../components/navigation';
import Sidebar from '../../components/sidebar';
import Link from '../../components/link';

import { IProfile } from './types';
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

const profileInfo = ProfileInfo();

const content = new Profile({
  sidebar,
  content: profileInfo,
});

render('#root', content);
