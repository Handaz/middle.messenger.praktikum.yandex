import Block from '../../../../../../modules/block';
import template from './chatManagement.tmpl';
import { IChatManagement } from './types';
import classes from './chatManagement.module.scss';

export default class ChatManagement extends Block<IChatManagement> {
  constructor(props: IChatManagement) {
    super(template, props);
  }

  render() {
    const { members, avatar, title, membersCount } = this.props;

    const blockClasses = {
      management: classes.management,
      main: classes.main,
      members: classes.members,
      info: classes.info,
      title: classes.title,
      avatar: classes.avatar,
      membersCount: classes.membersCount,
    };

    return this.compile({ members, avatar, title, membersCount, blockClasses });
  }
}
