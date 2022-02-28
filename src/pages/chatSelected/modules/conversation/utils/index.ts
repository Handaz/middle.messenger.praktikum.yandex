import Message from '../components/message';
import { Indexed } from '../../../../../types';
import { IMessageData } from '../types';
import getTime from '../../../../../utils/functions/getTime';

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
          status: is_read ? 'read' : 'unread',
          time: getTime(time),
        }),
    );

    return { messages: conversationContent };
  }
  return {};
};

export default mapStateToConversation;
