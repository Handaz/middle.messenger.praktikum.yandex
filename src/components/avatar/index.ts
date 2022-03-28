import Block from '../../modules/block';
import template from './avatar.tmpl';
import { IAvatar } from './types';
import classNames from '../../utils/functions/classnames';
import classes from './avatar.module.scss';

export default class Avatar extends Block<IAvatar> {
  constructor(props: IAvatar) {
    super(template, props);
  }

  render() {
    const { source } = this.props;

    const blockClasses = classNames(classes.img);

    return this.compile({ source, blockClasses });
  }
}
