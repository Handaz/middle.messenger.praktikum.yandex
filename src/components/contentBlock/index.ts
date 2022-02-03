import Block from '../../modules/block';
import template from './contentBlock.tmpl';
import { IContentBlock } from './types';

export default class ContentBlock extends Block {
  constructor(props: IContentBlock) {
    super(template, props);
  }

  render() {
    const { title, content } = this.props;

    return this.compile({ title, content });
  }
}
