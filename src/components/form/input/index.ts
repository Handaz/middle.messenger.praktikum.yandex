import template from './input.tmpl';
import { IInput } from './types';
import Block from '../../../modules/block';

export default class Input extends Block {
  constructor(props: IInput) {
    super(template, props);
  }

  render() {
    const { type, name, placeholder, error } = this.props;

    return this.compile({ type, name, placeholder, error });
  }
}
