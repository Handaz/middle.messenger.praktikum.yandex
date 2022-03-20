import Block from '../../modules/block';
import template from './loader.tmpl';
import { BlockProps } from '../../types';
import classNames from '../../utils/functions/classnames';
import classes from './loader.module.scss';

class Loader extends Block {
  constructor(props: BlockProps) {
    super(template, props);
  }

  render() {
    const blockClasses = classNames(classes.loader);

    return this.compile({
      blockClasses,
    });
  }
}

export default new Loader({});
