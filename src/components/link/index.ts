import template from './link.tmpl';
import { ILink } from './types';
import Block from '../../modules/block';

export default class Link extends Block {
  constructor(props: ILink) {
    super(template, props);
  }

  render() {
    const { url, content } = this.props;

    return this.compile({ url, content });
  }
}
