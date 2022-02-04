import template from './loginForm.tmpl';
import Block from '../../../../modules/block';
import { ILoginForm } from './types';

export default class LoginForm extends Block {
  constructor(props: ILoginForm) {
    super(template, props);
  }

  render() {
    const { content } = this.props;

    return this.compile({
      content,
    });
  }
}
