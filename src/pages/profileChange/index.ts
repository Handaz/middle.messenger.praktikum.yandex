import Block from '../../modules/block';
import { ProfileFormModule } from '../../modules/profileForm';

import Navigation from '../../components/navigation';
import Sidebar from '../../components/sidebar';
import Link from '../../components/link';
import Button from '../../components/button';

import profile from '../../layouts/profile';
import { IProfileChange } from './types';
import connect from '../../utils/functions/hoc';
import mapStateToProfileChange from './utils';
import arrow from '../../../static/icons/arrow';

class ProfileChange extends Block<IProfileChange> {
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
  content: new Button({
    type: 'button',
    content: arrow,
    round: true,
  }),
  url: 'profile',
});

const navigation = new Navigation({
  link,
});

const sidebar = new Sidebar({
  content: navigation,
});

const profileChange = connect<IProfileChange>(mapStateToProfileChange);

const ProfileChangeHoc = profileChange(ProfileChange);

const passwordForm = ProfileFormModule([], 'profile');

export default new ProfileChangeHoc({
  sidebar,
  content: passwordForm,
});
