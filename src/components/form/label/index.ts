import Block from '../../../modules/block';
import template from './label.tmpl';
import { ILabel } from './types';
import classNames from '../../../utils/functions/classnames';
import classes from './label.module.scss';

export default class Label extends Block<ILabel> {
  constructor(props: ILabel) {
    super(template, props);
  }

  render() {
    const { label, regular, name, file } = this.props;

    const blockClasses = classNames({
      [classes.regular]: regular,
      [classes.floating]: !regular && !file,
      [classes.file]: file,
    });

    return this.compile({
      name,
      label,
      blockClasses,
    });
  }
}
