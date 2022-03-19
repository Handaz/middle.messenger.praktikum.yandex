import Button from '../../../../../components/button';
import ContentBlock from '../../../../../components/contentBlock';
import Modal from '../../../../../components/modal';
import Avatar from '../../../../../components/avatar';
import ChatMembers from '../components/chatMembers';
import Form from '../../../../../components/form';
import Input from '../../../../../components/form/input';
import FormError from '../../../../../components/form/error';
import ChatMember from '../components/chatMember';
import ChatManagement from '../components/chatManagement';

import ConversationInfoController from '../controller';
import userAvatar from '../../../../../../static/images/userAvatar.png';
import infoIcon from '../../../../../../static/icons/infoIcon';
import { staticUrl } from '../../../../../utils/classes/request';
import { IChatMembers } from '../../../../../api/chats/types';
import { IStoreState } from '../../../../../store/types';

const mapStateToConversationInfo = ({
  chatsInfo,
  chat,
  chats,
}: IStoreState) => {
  if (chatsInfo && chats && chat) {
    const curChat = chatsInfo.find((item) => item.id === chat.id);
    const curChatInfo = chats.find((item) => item.id === chat.id);

    if (curChat?.members && curChatInfo) {
      const members = curChat.members.map(
        ({ display_name, login, id, role }: IChatMembers) =>
          new ChatMember({
            username: display_name ?? login,
            button:
              role === 'admin'
                ? 'admin'
                : new Button({
                    type: 'button',
                    content: 'Remove',
                    events: {
                      click: () => ConversationInfoController.removeMember(id),
                    },
                  }),
          }),
      );

      const fields = [
        {
          input: new Input({
            name: 'login',
            type: 'text',
            placeholder: 'User login',
          }),
          error: new FormError({}),
        },
      ];

      const form = new Form({
        fields,
        button: new Button({
          type: 'submit',
          content: 'Add user',
        }),
        events: {
          submit: (e: SubmitEvent) =>
            ConversationInfoController.addMember({ fields, e }),
        },
      });

      const content = new ContentBlock({
        content: new ChatManagement({
          avatar: new Avatar({
            source: chat.avatar ? `${staticUrl}${chat.avatar}` : userAvatar,
          }),
          title: chat.title,
          membersCount: chat.members?.length || 1,
          members: new ChatMembers({
            form,
            members,
          }),
        }),
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

      const { title, avatar } = curChatInfo;

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
