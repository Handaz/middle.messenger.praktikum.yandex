import Button from '../../../../../components/button';
import ContentBlock from '../../../../../components/contentBlock';
import Modal from '../../../../../components/modal';
import Avatar from '../../../../../components/avatar';
import ChatMembers from '../components/chatMembers';
import Form from '../../../../../components/form';
import Input from '../../../../../components/form/input';
import FormError from '../../../../../components/form/error';
import ChatMember from '../components/chatMember';

import ConversationInfoController from '../controller';
import userAvatar from '../../../../../../static/images/userAvatar.png';
import infoIcon from '../../../../../../static/icons/infoIcon';
import { Indexed } from '../../../../../types';
import { staticUrl } from '../../../../../utils/classes/request';
import { IChatMembers } from '../../../../../api/chats/types';

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
      const members = chat.members.map(
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
        title: 'Manage chat',
        content: new ChatMembers({
          form,
          members,
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
