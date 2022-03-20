import Block from '../../../../../../modules/block';
import template from './chatMembers.tmpl';
import { IChatMembers } from './types';
import classes from './chatMembers.module.scss';

export default class ChatMembers extends Block<IChatMembers> {
  constructor(props: IChatMembers) {
    super(template, props);
  }

  render() {
    const { members, button } = this.props;

    const blockClasses = {
      head: classes.head,
      title: classes.title,
      membersWrapper: classes.membersWrapper,
      members: classes.members,
    };

    return this.compile({ members, button, blockClasses });
  }
}
