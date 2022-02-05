import Block from '../../modules/block';
import template from './navigation.tmpl';
import { INavigation } from './types';

export default class Navigation extends Block {
  constructor(props: INavigation) {
    super(template, props);
  }

  render() {
    const { link } = this.props;

    return this.compile({
      link,
    });
  }
}
