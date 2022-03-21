import Block from '../../../block';
import template from './chat.tmpl';
import { IChat } from './types';
import classes from './chat.module.scss';
import classNames from '../../../../utils/functions/classnames';

export default class Chat extends Block<IChat> {
  constructor(props: IChat) {
    super(template, props);
  }

  render() {
    const { avatar, title, sender, message, unread, time, selected } =
      this.props;

    const blockClasses = {
      chat: classNames(classes.chat, { [classes.selectedChat]: selected }),
      avatar: classes.avatar,
      chatInfo: classes.chatInfo,
      sender: classes.sender,
      message: classes.message,
      time: classes.time,
      messageContent: classes.messageContent,
      messageInfo: classes.messageInfo,
      metaInfo: classes.metaInfo,
      title: classes.title,
      unread: classes.unread,
    };

    return this.compile({
      avatar,
      title,
      sender,
      message,
      time,
      unread,
      blockClasses,
    });
  }
}
