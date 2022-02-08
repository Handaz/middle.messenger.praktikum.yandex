import Block from '../../modules/block';
import template from './link.tmpl';
import { ILink } from './types';

export default class Link extends Block<ILink> {
  constructor(props: ILink) {
    super(template, props);
  }

  render() {
    const { url, content } = this.props;

    return this.compile({ url, content });
  }
}
