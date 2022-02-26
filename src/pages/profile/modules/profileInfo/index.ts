import Block from '../../../../modules/block';
import template from './profileInfo.tmpl';

import Link from '../../../../components/link';
import Avatar from '../../../../components/avatar';

import Store from '../../../../store';
import ProfileController from './controller';
import { IProfileInfo } from './types';
import { profileLinks, mapStateToProfile } from './utils';
import connect from '../../../../utils/functions/hoc';
import profilePicture from '../../../../../static/images/profilePicture.png';

export class ProfileInfo extends Block<IProfileInfo> {
  constructor(props: IProfileInfo) {
    super(template, props);
  }

  render() {
    const { avatar, username, profileFields, links } = this.props;

    if (!Store.getState().user) {
      ProfileController.getUser();
    }

    return this.compile({
      avatar,
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

  const avatar = new Avatar({
    source: profilePicture,
  });

  return new ProfileInfoHoc({
    avatar,
    links,
    username: 'test',
    profileFields: [{ label: '', value: '' }],
  });
}
