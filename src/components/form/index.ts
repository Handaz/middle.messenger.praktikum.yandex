import Block from '../../modules/block';
import template from './form.tmpl';
import { IForm } from './types';
import classNames from '../../utils/functions/classnames';
import classes from './form.module.scss';

export default class Form extends Block<IForm> {
  constructor(props: IForm) {
    super(template, props);
  }

  render() {
    const { vertical, fields, button } = this.props;

    const formClasses = classNames(classes.form, {
      [classes.vertical]: vertical,
    });

    const blockClasses = {
      form: formClasses,
      inputWrapper: classes.inputWrapper,
    };

    return this.compile({ vertical, fields, button, blockClasses });
  }
}
