import loginFormTmpl from './loginForm.tmpl';
import Block from '../../../../modules/block';
import { ILoginForm } from './types';

export default class LoginForm extends Block {
  constructor(props: ILoginForm) {
    super(loginFormTmpl, props);
  }

  render() {
    return this.compile({
      content: this.props.content,
    });
  }
}
