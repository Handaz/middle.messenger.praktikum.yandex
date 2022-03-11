import Block from '../../modules/block';
import template from './modal.tmpl';
import { IModal } from './types';
import handleShadowClick from './utils';
import classNames from '../../utils/functions/classnames';
import classes from './modal.module.scss';

export default class Modal extends Block<IModal> {
  constructor(props: IModal) {
    super(template, props);
    this.setProps({
      events: {
        click: (e: MouseEvent) => handleShadowClick.call(this, e),
      },
    });
  }

  render() {
    const { isModalOpen, content } = this.props;

    const shadow = classNames(classes.modalShadow, {
      [classes.modalShadowOpen]: isModalOpen,
    });
    const modal = classNames(classes.modal, {
      [classes.modalOpen]: isModalOpen,
    });

    const blockClasses = {
      shadow,
      modal,
    };

    return this.compile({
      isModalOpen,
      content,
      blockClasses,
    });
  }
}
