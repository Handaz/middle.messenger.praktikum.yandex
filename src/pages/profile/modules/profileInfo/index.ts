import template from './profileInfo.tmpl';
import Block from '../../../../modules/block';
import { IProfileInfo } from './types';

export default class ProfileInfo extends Block {
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
