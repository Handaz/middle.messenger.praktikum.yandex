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
    const { vertical, fields, button, profile } = this.props;

    const formClasses = classNames(classes.form, {
      [classes.vertical]: vertical,
      [classes.profileForm]: profile,
    });

    const inputWrapper = classNames(classes.inputWrapper, {
      [classes.profileInput]: profile,
    });

    const blockClasses = {
      form: formClasses,
      inputWrapper,
    };

    return this.compile({ vertical, fields, button, blockClasses });
  }
}
