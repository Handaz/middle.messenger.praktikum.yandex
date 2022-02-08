import Block from '../../modules/block';
import template from './contentBlock.tmpl';
import { IContentBlock } from './types';

export default class ContentBlock extends Block<IContentBlock> {
  constructor(props: IContentBlock) {
    super(template, props);
  }

  render() {
    const { title, content, authForm } = this.props;

    return this.compile({ title, content, authForm });
  }
}
