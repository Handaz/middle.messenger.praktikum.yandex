import Block from '../../../../../../modules/block';
import template from './addMember.tmpl';
import { IAddMember } from './types';
import classes from './addMember.module.scss';

export default class AddMember extends Block<IAddMember> {
  constructor(props: IAddMember) {
    super(template, props);
  }

  render() {
    const { form, button, users } = this.props;

    const blockClasses = {
      head: classes.head,
      addMember: classes.addMember,
      title: classes.title,
    };

    return this.compile({ form, button, blockClasses, users });
  }
}
