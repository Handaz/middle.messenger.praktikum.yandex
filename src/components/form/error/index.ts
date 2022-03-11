import Block from '../../../modules/block';
import template from './error.tmpl';
import { IFormError } from './types';
import classNames from '../../../utils/functions/classnames';
import classes from './error.module.scss';

export default class FormError extends Block<IFormError> {
  constructor(props: IFormError) {
    super(template, props);
  }

  render() {
    const { error } = this.props;

    const blockClasses = classNames(classes.error, {
      [classes.errorShow]: error,
    });

    return this.compile({ error, blockClasses });
  }
}
