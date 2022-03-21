import Block from '../../../modules/block';
import template from './fileInput.tmpl';
import { IFileInput } from './types';
import classes from './fileInput.module.scss';

export default class FileInput extends Block<IFileInput> {
  constructor(props: IFileInput) {
    super(template, props);
  }

  render() {
    const { name, label, error } = this.props;

    const blockClasses = { input: classes.input, label: classes.label };

    return this.compile({ name, label, error, blockClasses });
  }
}
