import Block from '../../../../../../modules/block';
import template from './chatMembers.tmpl';
import { IChatMembers } from './types';

export default class ChatMembers extends Block<IChatMembers> {
  constructor(props: IChatMembers) {
    super(template, props);
  }

  render() {
    const { members, form } = this.props;

    return this.compile({ members, form });
  }
}
