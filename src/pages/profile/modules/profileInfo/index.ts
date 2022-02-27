import Block from '../../../../modules/block';
import template from './profileInfo.tmpl';

import Link from '../../../../components/link';
import Avatar from '../../../../components/avatar';
import Modal from '../../../../components/modal';

import Store from '../../../../store';
import ProfileController from './controller';
import { IProfileInfo } from './types';
import { profileLinks, mapStateToProfile } from './utils';
import connect from '../../../../utils/functions/hoc';
import profilePicture from '../../../../../static/images/profilePicture.png';
import ContentBlock from '../../../../components/contentBlock';

export class ProfileInfo extends Block<IProfileInfo> {
  constructor(props: IProfileInfo) {
    super(template, props);
  }

  render() {
    const { avatar, modal, username, profileFields, links } = this.props;

    if (!Store.getState().user) {
      ProfileController.getUser();
    }

    return this.compile({
      avatar,
      modal,
      username,
      profileFields,
      links,
    });
  }
}

const profileInfo = connect<IProfileInfo>(mapStateToProfile);

const ProfileInfoHoc = profileInfo(ProfileInfo);

export function ProfileInfoModule(): ProfileInfo {
  const links = profileLinks.map(
    ({ url, content }, index) =>
      new Link({
        url,
        content,
        events:
          index === profileLinks.length - 1
            ? {
                click: ProfileController.logout,
              }
            : undefined,
      }),
  );

  const modal = new Modal({
    content: new ContentBlock({
      title: 'Upload a file',
      content: '',
    }),
    isModalOpen: false,
  });

  const avatar = new Avatar({
    source: profilePicture,
    events: {
      click: () => modal.setProps({ isModalOpen: true }),
    },
  });

  return new ProfileInfoHoc({
    avatar,
    modal,
    links,
    username: '',
    profileFields: [{ label: '', value: '' }],
  });
}
