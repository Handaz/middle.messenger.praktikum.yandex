import Block from '../../modules/block';
import template from './button.tmpl';
import { IButton } from './types';
import classNames from '../../utils/functions/classnames';
import classes from './button.module.scss';

export default class Button extends Block<IButton> {
  constructor(props: IButton) {
    super(template, props);
  }

  render() {
    const { type, content, transparent, round } = this.props;

    const blockClasses = classNames(classes.btn, {
      [classes.transparent]: transparent,
      [classes.round]: round,
    });

    return this.compile({ type, content, transparent, blockClasses });
  }
}
