import Block from '../../modules/block';
import template from './sidebar.tmpl';
import { ISidebar } from './types';
import classNames from '../../utils/functions/classnames';
import classes from './sidebar.module.scss';

export default class Sidebar extends Block<ISidebar> {
  constructor(props: ISidebar) {
    super(template, props);
  }

  render() {
    const { content } = this.props;

    const blockClasses = classNames(classes.sidebar);

    return this.compile({ content, blockClasses });
  }
}
