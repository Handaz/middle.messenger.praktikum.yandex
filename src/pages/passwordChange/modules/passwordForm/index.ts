import template from './passwordForm.tmpl';
import Block from '../../../../modules/block';
import { IPasswordForm } from './types';

export default class PasswordForm extends Block {
  constructor(props: IPasswordForm) {
    super(template, props);
  }

  render() {
    const { avatar, form } = this.props;

    return this.compile({
      avatar,
      form,
    });
  }
}
