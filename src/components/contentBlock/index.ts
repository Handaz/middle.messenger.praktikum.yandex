import Block from '../../modules/block';
import template from './contentBlock.tmpl';
import { IContentBlock } from './types';
import classNames from '../../utils/functions/classnames';
import classes from './contentBlock.module.scss';

export default class ContentBlock extends Block<IContentBlock> {
  constructor(props: IContentBlock) {
    super(template, props);
  }

  render() {
    const { title, content, authForm } = this.props;

    const contentBlockClasses = classNames(classes.contentBlock, {
      [classes.authForm]: authForm,
    });

    const blockClasses = {
      contentBlockClasses,
      titleClass: classes.title,
    };

    return this.compile({ title, content, authForm, blockClasses });
  }
}
