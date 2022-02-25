import Chat from '../components/chat';
import Avatar from '../../../components/avatar';
import Link from '../../../components/link';
import userAvatar from '../../../../static/images/userAvatar.png';
import { Indexed } from '../../../types';

const mapStateToChats = (state: Indexed) => {
  if (state.chats) {
    return {
      chatList: state.chats.map(
        ({ title, last_message }: Record<string, string>) =>
          new Chat({
            avatar: new Avatar({
              source: userAvatar,
            }),
            title: new Link({ content: title, url: 'chat' }),
            sender: 'test',
            message: last_message ?? '',
            time: '14 88',
          }),
      ),
    };
  }
  return { chatList: [] };
};

export default mapStateToChats;
