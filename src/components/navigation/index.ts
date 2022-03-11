import Block from '../../modules/block';
import template from './navigation.tmpl';
import { INavigation } from './types';
import classNames from '../../utils/functions/classnames';
import classes from './navigation.module.scss';

export default class Navigation extends Block<INavigation> {
  constructor(props: INavigation) {
    super(template, props);
  }

  render() {
    const { link } = this.props;

    const blockClasses = classNames(classes.navigation);

    return this.compile({
      link,
      blockClasses,
    });
  }
}
