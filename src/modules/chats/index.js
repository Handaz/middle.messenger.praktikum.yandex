import Handlebars from 'handlebars';
import chatsTmpl from './chats.tmpl';
import sidebar from '../../components/sidebar';
import chat from './components/chat';
import input from '../../components/form/input';
import link from '../../components/link';
import avatar from '../../components/avatar';
import profile from './components/profile';
import { chatsData } from './utils';

export const chats = () => {
  const template = Handlebars.compile(chatsTmpl, {
    noEscape: true,
  });
  const profileLink = link.render({
    content: profile.render(),
    url: 'profile.html',
  });
  const chatList = chatsData.map(({ username, sender, message, time }) =>
    chat.render({
      avatar: avatar.render({
        source: require('../../../static/images/userAvatar.png'),
      }),
      username: link.render({ content: username, url: 'chatSelected.html' }),
      sender,
      message,
      time,
    })
  );

  const chats = sidebar.render({
    content: template({
      profile: profileLink,
      search: input.render(),
      chatList: chatList,
    }),
  });
  return chats;
};
