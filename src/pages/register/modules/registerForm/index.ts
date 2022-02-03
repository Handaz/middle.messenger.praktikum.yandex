import registerFormTmpl from './registerForm.tmpl';
import Block from '../../../../modules/block';
import { IRegisterForm } from './types';

export default class LoginForm extends Block {
  constructor(props: IRegisterForm) {
    super(registerFormTmpl, props);
  }

  render() {
    return this.compile({
      content: this.props.content,
    });
  }
}
