import template from './profileInfo.tmpl';
import Block from '../../../../modules/block';

import Link from '../../../../components/link';
import Avatar from '../../../../components/avatar';

import { IProfileInfo } from './types';
import { profileLinks, fields } from './utils';
import profilePicture from '../../../../../static/images/profilePicture.png';

class ProfileInfo extends Block {
  constructor(props: IProfileInfo) {
    super(template, props);
  }

  render() {
    const { avatar, username, profileFields, links } = this.props;

    return this.compile({
      avatar,
      username,
      profileFields,
      links,
    });
  }
}

export default function profileInfo(): ProfileInfo {
  const links = profileLinks.map(
    ({ url, content }) => new Link({ url, content }),
  );

  const avatar = new Avatar({
    source: profilePicture,
  });
  return new ProfileInfo({
    avatar,
    links,
    username: 'test',
    profileFields: fields,
  });
}
