import Block from '../../modules/block';
import template from './avatar.tmpl';
import { IAvatar } from './types';

export default class Avatar extends Block {
  constructor(props: IAvatar) {
    super(template, props);
  }

  render() {
    const { source } = this.props;

    return this.compile({ source });
  }
}
