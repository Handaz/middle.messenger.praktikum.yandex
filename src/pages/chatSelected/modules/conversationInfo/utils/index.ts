import Button from '../../../../../components/button';
import ContentBlock from '../../../../../components/contentBlock';
import Modal from '../../../../../components/modal';
import Avatar from '../../../../../components/avatar';

import userAvatar from '../../../../../../static/images/userAvatar.png';
import infoIcon from '../../../../../../static/icons/infoIcon';
import { Indexed } from '../../../../../types';
import { staticUrl } from '../../../../../utils/classes/request';

const mapStateToConversationInfo = ({
  currChats,
  messages,
  chats,
}: Indexed) => {
  if (currChats && chats && messages) {
    const chat = currChats.find((item: Indexed) => item.id === messages.chat);
    const { title, avatar } = chats.find(
      (item: Indexed) => item.id === messages.chat,
    );
    if (chat.members.length > 0) {
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

      return {
        title: title ?? '',
        avatar: new Avatar({
          source: avatar ? `${staticUrl}${avatar}` : userAvatar,
        }),
        modal,
        button,
      };
    }
  }
  return {};
};

export default mapStateToConversationInfo;
