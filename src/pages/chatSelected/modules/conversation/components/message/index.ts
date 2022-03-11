import Block from '../../../../../../modules/block';
import template from './message.tmpl';
import { IMessage } from './types';
import classNames from '../../../../../../utils/functions/classnames';
import classes from './message.module.scss';

export default class Message extends Block<IMessage> {
  constructor(props: IMessage) {
    super(template, props);
  }

  render() {
    const { own, content, status, time } = this.props;

    const message = classNames(classes.message, {
      [classes.ownMessage]: own,
      [classes.incomingMessage]: !own,
    });

    const blockClasses = {
      message,
      content: classes.content,
      info: classes.info,
    };

    return this.compile({
      own,
      content,
      status,
      time,
      blockClasses,
    });
  }
}
