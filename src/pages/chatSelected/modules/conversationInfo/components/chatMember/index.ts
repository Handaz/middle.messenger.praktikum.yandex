import Block from '../../../../../../modules/block';
import template from './chatMember.tmpl';
import { IChatMember } from './types';
import classNames from '../../../../../../utils/functions/classnames';
import classes from './chatMember.module.scss';

export default class ChatMember extends Block<IChatMember> {
  constructor(props: IChatMember) {
    super(template, props);
  }

  render() {
    const { username, button, avatar, adding, inChat } = this.props;

    const blockClasses = {
      userInfo: classes.userInfo,
      avatar: classes.avatar,
      username: classes.username,
      member: classes.member,
      button: classNames({
        [classes.removeUser]: !adding,
        [classes.addUser]: adding && !inChat,
        [classes.inChat]: inChat,
      }),
    };

    return this.compile({ username, button, avatar, blockClasses });
  }
}
