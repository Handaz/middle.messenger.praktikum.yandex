import Block from '../../modules/block';
import template from './button.tmpl';
import { IButton } from './types';

export default class Button extends Block<IButton> {
  constructor(props: IButton) {
    super(template, props);
  }

  render() {
    const { type, content } = this.props;

    return this.compile({ type, content });
  }
}
