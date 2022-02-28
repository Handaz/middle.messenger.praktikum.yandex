import Block from '../../../../modules/block';
import template from './conversationInfo.tmpl';

import Avatar from '../../../../components/avatar';
import Button from '../../../../components/button';
import ContentBlock from '../../../../components/contentBlock';
import Modal from '../../../../components/modal';

import { IConversationInfo } from './types';
import infoIcon from '../../../../../static/icons/infoIcon';
import userAvatar from '../../../../../static/images/userAvatar.png';

export default class ConversationInfo extends Block<IConversationInfo> {
  constructor(props: IConversationInfo) {
    super(template, props);
  }

  render() {
    const { avatar, username, button, modal } = this.props;

    return this.compile({
      avatar,
      username,
      button,
      modal,
    });
  }
}

export function ConversationInfoModule() {
  const content = new ContentBlock({
    title: 'Manage chat',
    content: '',
  });

  const modal = new Modal({
    content,
    isModalOpen: false,
  });

  const infoButton = new Button({
    type: 'button',
    content: infoIcon,
    transparent: true,
    events: {
      click: () => modal.setProps({ isModalOpen: true }),
    },
  });

  return new ConversationInfo({
    modal,
    avatar: new Avatar({
      source: userAvatar,
    }),
    username: 'test',
    button: infoButton,
  });
}
