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
import Label from '../../../../../components/form/label';

import ConversationInfoController from '../controller';
import userAvatar from '../../../../../../static/images/userAvatar.png';
import profilePicture from '../../../../../../static/images/profilePicture.png';
import infoIcon from '../../../../../../static/icons/infoIcon';
import arrowIcon from '../../../../../../static/icons/arrow';
import { staticUrl } from '../../../../../utils/classes/request';
import { IChatMembers } from '../../../../../api/chats/types';
import { IStoreState } from '../../../../../store/types';
import AddMember from '../components/addMember';

const usersModal = new Modal({
  content: '',
  isModalOpen: false,
});

const manageModal = new Modal({
  content: '',
  isModalOpen: false,
});

const mapStateToConversationInfo = ({
  chatsInfo,
  chat,
  chats,
  foundUsers,
}: IStoreState) => {
  if (chatsInfo && chats && chat) {
    const curChat = chatsInfo.find((item) => item.id === chat.id);
    const curChatInfo = chats.find((item) => item.id === chat.id);

    if (curChat?.members && curChatInfo) {
      const members = curChat.members.map(
        ({ display_name, login, id, role, avatar }: IChatMembers) =>
          new ChatMember({
            username: display_name ?? login,
            avatar: new Avatar({
              source: avatar ? `${staticUrl}${avatar}` : profilePicture,
            }),
            button:
              role === 'admin'
                ? 'admin'
                : new Button({
                    type: 'button',
                    content: '+',
                    transparent: true,
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
            placeholder: 'Login',
          }),
          error: new FormError({}),
          label: new Label({
            label: 'Login',
          }),
        },
      ];

      const form = new Form({
        fields,
        button: new Button({
          type: 'submit',
          content: 'Search',
        }),
        styles: {
          gap: '20px',
        },
        events: {
          submit: (e: SubmitEvent) =>
            ConversationInfoController.findUser({ fields, e }),
        },
      });

      const cancelBtn = new Button({
        type: 'button',
        content: arrowIcon,
        transparent: true,
        events: {
          click: () => {
            usersModal.setProps({ isModalOpen: false });
            manageModal.setProps({ isModalOpen: true });
          },
        },
      });

      const usersContent = new ContentBlock({
        content: new AddMember({
          form,
          button: cancelBtn,
          users: foundUsers
            ? foundUsers.map(({ avatar, login, display_name, id }) => {
                const userInChat = chat.members?.find((item) => item.id === id);

                return new ChatMember({
                  adding: true,
                  inChat: !!userInChat,
                  avatar: new Avatar({
                    source: avatar ? `${staticUrl}${avatar}` : profilePicture,
                  }),
                  username: display_name ?? login,
                  button: new Button({
                    type: 'button',
                    content: userInChat ? 'In chat' : '+',
                    transparent: true,
                    events: {
                      click: () => {
                        if (!userInChat) {
                          ConversationInfoController.addMember(id);
                        }
                      },
                    },
                  }),
                });
              })
            : [],
        }),
      });

      const membersBtn = new Button({
        type: 'button',
        transparent: true,
        content: '+',
        events: {
          click: () => {
            manageModal.setProps({ isModalOpen: false });
            usersModal.setProps({ isModalOpen: true });
          },
        },
      });

      const manageContent = new ContentBlock({
        content: new ChatManagement({
          avatar: new Avatar({
            source: chat.avatar ? `${staticUrl}${chat.avatar}` : userAvatar,
          }),
          title: chat.title,
          membersCount: chat.members?.length || 1,
          members: new ChatMembers({
            button: membersBtn,
            members,
          }),
        }),
      });

      usersModal.setProps({ content: usersContent });
      manageModal.setProps({ content: manageContent });

      const button = new Button({
        type: 'button',
        content: infoIcon,
        transparent: true,
        events: {
          click: () => manageModal.setProps({ isModalOpen: true }),
        },
      });

      const { title, avatar } = curChatInfo;

      return {
        title: title ?? '',
        avatar: new Avatar({
          source: avatar ? `${staticUrl}${avatar}` : userAvatar,
        }),
        manageModal,
        usersModal,
        button,
      };
    }
  }
  return {};
};

export default mapStateToConversationInfo;
