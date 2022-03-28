import Block from '../../../../modules/block';
import template from './systemMessage.tmpl';
import { ISystemMessage } from './types';
import classNames from '../../../../utils/functions/classnames';
import classes from './systemMessage.module.scss';

export default class SystemMessage extends Block<ISystemMessage> {
  constructor(props: ISystemMessage) {
    super(template, props);
  }

  render() {
    const { message } = this.props;

    const blockClasses = classNames(classes.message);

    return this.compile({ message, blockClasses });
  }
}
