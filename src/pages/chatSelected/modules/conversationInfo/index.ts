import Block from '../../../../modules/block';
import template from './conversationInfo.tmpl';

import Avatar from '../../../../components/avatar';
import Button from '../../../../components/button';
import ContentBlock from '../../../../components/contentBlock';
import Modal from '../../../../components/modal';

import { IConversationInfo } from './types';
import infoIcon from '../../../../../static/icons/infoIcon';
import userAvatar from '../../../../../static/images/userAvatar.png';
import mapStateToConversationInfo from './utils';
import connect from '../../../../utils/functions/hoc';
import classes from './conversationInfo.module.scss';

export default class ConversationInfo extends Block<IConversationInfo> {
  constructor(props: IConversationInfo) {
    super(template, props);
  }

  render() {
    const { avatar, title, button, modal } = this.props;

    const blockClasses = {
      info: classes.info,
      chat: classes.chat,
      avatar: classes.avatar,
      button: classes.button,
      title: classes.title,
    };

    return this.compile({
      avatar,
      title,
      button,
      modal,
      blockClasses,
    });
  }
}

const conversationInfo = connect<IConversationInfo>(mapStateToConversationInfo);

const ConversationInfoHoc = conversationInfo(ConversationInfo);

export function ConversationInfoModule() {
  const content = new ContentBlock({
    title: '',
    content: '',
  });

  const modal = new Modal({
    content,
    isModalOpen: false,
  });

  const button = new Button({
    type: 'button',
    content: infoIcon,
    transparent: true,
    events: {
      click: () => modal.setProps({ isModalOpen: true }),
    },
  });

  return new ConversationInfoHoc({
    modal,
    avatar: new Avatar({
      source: userAvatar,
    }),
    title: '',
    button,
  });
}
