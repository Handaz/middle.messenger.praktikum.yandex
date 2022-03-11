import Block from '../../../../../../modules/block';
import template from './chatMember.tmpl';
import { IChatMember } from './types';
import classes from './chatMember.module.scss';

export default class ChatMember extends Block<IChatMember> {
  constructor(props: IChatMember) {
    super(template, props);
  }

  render() {
    const { username, button } = this.props;

    const blockClasses = {
      member: classes.member,
    };

    return this.compile({ username, button, blockClasses });
  }
}
