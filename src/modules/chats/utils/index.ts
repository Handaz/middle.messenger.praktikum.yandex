import Chat from '../components/chat';
import Avatar from '../../../components/avatar';

import ConversationController from '../../../pages/chatSelected/modules/conversation/controller';
import { staticUrl } from '../../../utils/classes/request';
import userAvatar from '../../../../static/images/userAvatar.png';
import { Indexed, ValidationSchema } from '../../../types';
import { IInput } from '../../../components/form/input/types';
import { IChatsInfo, ILastMessageInfo } from '../../../api/chats/types';
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

const mapStateToChats = (state: Indexed) => {
  if (state.chats) {
    return {
      chatList: state.chats.map(
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
          const { user, content, time } = info;
          return new Chat({
            avatar: new Avatar({
              source: avatar ? `${staticUrl}${avatar}` : userAvatar,
            }),
            title,
            sender: user.display_name ?? '',
            message: content,
            time,
            unread: unread_count,
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
