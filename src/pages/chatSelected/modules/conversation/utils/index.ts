import Message from '../components/message';
import { IMessageData } from '../components/message/types';
import Messages from '../components/messages';
import Loader from '../../../../../components/loader';

import ConversationController from '../controller';
import getTime from '../../../../../utils/functions/getTime';
import readIcon from '../../../../../../static/icons/readIcon';
import unreadIcon from '../../../../../../static/icons/unreadIcon';
import { IStoreState } from '../../../../../store/types';
import { staticUrl } from '../../../../../utils/classes/request';

const mapStateToConversation = ({ user, chat }: IStoreState) => {
  if (user && chat) {
    if (!chat.messages) {
      return {
        messages: new Messages({
          messages: [],
          loader: true,
          loaderComponent: Loader,
        }),
      };
    }

    if (chat.messages.length === 0) {
      return {
        messages: new Messages({
          messages: [],
          loader: false,
        }),
      };
    }

    const conversationContent = chat.messages.map(
      ({ user_id, content, is_read, time, file }: IMessageData) =>
        new Message({
          own: user.id === user_id,
          content,
          filePath: file ? `${staticUrl}${file.path}` : undefined,
          status: is_read ? readIcon : unreadIcon,
          time: getTime(time),
        }),
    );

    const messages = new Messages({
      messages: conversationContent,
      loader: false,
      events: {
        scroll: (e: WheelEvent) => {
          const el = e.target as HTMLElement;

          if (el) {
            const scrolledToTop =
              Math.round(el.scrollHeight + el.scrollTop) === el.clientHeight;

            if (scrolledToTop) {
              ConversationController.getMessages();
            }
          }
        },
      },
    });

    return {
      messages,
    };
  }
  return {};
};

export default mapStateToConversation;
