import Block from '../../modules/block';
import ProfileForm from '../../modules/profileForm';

import Navigation from '../../components/navigation';
import Sidebar from '../../components/sidebar';
import Input from '../../components/form/input';
import Link from '../../components/link';

import { IPasswordChange } from './types';
import profile from '../../layouts/profile';

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

const passwordForm = ProfileForm(fields);

const content = new PasswordChange({
  sidebar,
  content: passwordForm,
});

render('#root', content);
