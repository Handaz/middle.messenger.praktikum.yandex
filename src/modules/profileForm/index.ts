import template from './profileForm.tmpl';
import Block from '../block';
import { IProfileForm } from './types';

export default class ProfileForm extends Block {
  constructor(props: IProfileForm) {
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
