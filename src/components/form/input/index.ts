import Block from '../../../modules/block';
import template from './input.tmpl';
import { IInput } from './types';
import classNames from '../../../utils/functions/classnames';
import classes from './input.module.scss';

export default class Input extends Block<IInput> {
  constructor(props: IInput) {
    super(template, props);
  }

  render() {
    const { type, name, placeholder, error, value, opaque, round } = this.props;

    const blockClasses = classNames(classes.input, {
      [classes.inputError]: error,
      [classes.inputOpaque]: opaque,
      [classes.inputRound]: round,
    });

    return this.compile({
      type,
      name,
      placeholder,
      error,
      value,
      blockClasses,
    });
  }
}
