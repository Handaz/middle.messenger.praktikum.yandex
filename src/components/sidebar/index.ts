import Block from '../../modules/block';
import template from './sidebar.tmpl';
import { ISidebar } from './types';

export default class Sidebar extends Block {
  constructor(props: ISidebar) {
    super(template, props);
  }

  render() {
    const { content } = this.props;

    return this.compile({ content });
  }
}
