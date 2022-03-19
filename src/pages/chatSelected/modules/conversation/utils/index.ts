import Message from '../components/message';
import { IMessageData } from '../components/message/types';
import getTime from '../../../../../utils/functions/getTime';
import readIcon from '../../../../../../static/icons/readIcon';
import unreadIcon from '../../../../../../static/icons/unreadIcon';
import { IStoreState } from '../../../../../store/types';

const mapStateToConversation = ({ user, chat }: IStoreState) => {
  if (user && chat) {
    if (!chat.messages) {
      return {
        messages: [],
        loader: true,
      };
    }

    if (chat.messages.length === 0) {
      return {
        messages: [],
        loader: false,
      };
    }

    const conversationContent = chat.messages.map(
      ({ user_id, content, is_read, time }: IMessageData) =>
        new Message({
          own: user.id === user_id,
          content,
          status: is_read ? readIcon : unreadIcon,
          time: getTime(time),
        }),
    );

    return { messages: conversationContent, loader: false };
  }
  return {};
};

export default mapStateToConversation;
