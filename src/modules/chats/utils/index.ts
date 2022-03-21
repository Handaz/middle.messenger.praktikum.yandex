import Chat from '../components/chat';
import Avatar from '../../../components/avatar';

import ConversationController from '../../../pages/chatSelected/modules/conversation/controller';
import { staticUrl } from '../../../utils/classes/request';
import userAvatar from '../../../../static/images/userAvatar.png';
import { ValidationSchema } from '../../../types';
import { IInput } from '../../../components/form/input/types';
import { IChatsInfo, ILastMessageInfo } from '../../../api/chats/types';
import { IStoreState } from '../../../store/types';
import getTime from '../../../utils/functions/getTime';
import { noEmptyRule } from '../../../utils/data/userValidationSchema';

export const chatAddFields: IInput[] = [
  {
    type: 'text',
    name: 'title',
    placeholder: 'Chat title',
  },
];

export const validationSchema: ValidationSchema = {
  title: { rule: noEmptyRule, error: 'Enter chat title' },
};

const mapStateToChats = ({
  chats,
  areSocketsReady,
  user,
  chat,
}: IStoreState) => {
  if (chats && areSocketsReady && user) {
    const curUser = user.display_name ?? user.login;

    return {
      loader: false,
      chatList: chats
        .sort((a, b) => {
          if (!a.last_message || !b.last_message) {
            return -1;
          }

          return (
            new Date(a.last_message.time).getTime() -
            new Date(b.last_message.time).getTime()
          );
        })
        .reverse()
        .map(
          ({ title, last_message, avatar, unread_count, id }: IChatsInfo) => {
            const info: ILastMessageInfo = {
              user: {
                id: NaN,
                first_name: '',
                second_name: '',
                display_name: '',
                avatar: '',
                email: '',
                login: '',
                phone: '',
              },
              content: '',
              time: '',
            };

            if (last_message) {
              info.user = last_message.user;
              info.time = getTime(last_message.time);
              info.content = last_message.content;
            }

            const { content, time } = info;
            const sender = info.user.display_name ?? info.user.login;

            return new Chat({
              avatar: new Avatar({
                source: avatar ? `${staticUrl}${avatar}` : userAvatar,
              }),
              title,
              sender: curUser === sender ? '' : sender ?? '',
              message: content,
              time,
              unread: unread_count > 99 ? '99+' : unread_count,
              selected: chat ? chat.id === id : false,
              events: {
                click: () => ConversationController.getConversation(id),
              },
            });
          },
        ),
    };
  }

  return { chatList: [] };
};

export default mapStateToChats;
