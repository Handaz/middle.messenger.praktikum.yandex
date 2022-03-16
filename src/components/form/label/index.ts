import Block from '../../../modules/block';
import template from './label.tmpl';
import { ILabel } from './types';
import classes from './label.module.scss';

export default class Label extends Block<ILabel> {
  constructor(props: ILabel) {
    super(template, props);
  }

  render() {
    const { label } = this.props;

    const blockClasses = classes.label;

    return this.compile({
      label,
      blockClasses,
    });
  }
}
