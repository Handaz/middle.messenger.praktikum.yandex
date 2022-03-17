import Message from '../components/message';
import { Indexed } from '../../../../../types';
import { IMessageData } from '../types';
import getTime from '../../../../../utils/functions/getTime';
import readIcon from '../../../../../../static/icons/readIcon';
import unreadIcon from '../../../../../../static/icons/unreadIcon';

const mapStateToConversation = ({ user, messages }: Indexed) => {
  if (user && messages) {
    if (messages.data.length === 0) {
      return {
        messages: [],
      };
    }

    const conversationContent = messages.data.map(
      ({ user_id, content, is_read, time }: IMessageData) =>
        new Message({
          own: user.id === user_id,
          content,
          status: is_read ? readIcon : unreadIcon,
          time: getTime(time),
        }),
    );

    return { messages: conversationContent };
  }
  return {};
};

export default mapStateToConversation;
