import Block from '../../modules/block';
import Chats from '../../modules/chats';

import Chat from '../../modules/chats/components/chat';
import Sidebar from '../../components/sidebar';
import SystemMessage from './components/systemMessage';
import Input from '../../components/form/input';
import Link from '../../components/link';
import Avatar from '../../components/avatar';

import { IChatSelect } from './types';
import main from '../../layouts/main';
import chatsData from '../../utils/chatsData';
import render from '../../utils/renderDom';
import burgerIcon from '../../../static/icons/burgerIcon.svg';
import userAvatar from '../../../static/images/userAvatar.png';

class ChatSelect extends Block {
  constructor(props: IChatSelect) {
    super(main.template, props);
  }

  render() {
    const { chats, content } = this.props;

    return this.compile({
      chats,
      content,
    });
  }
}

const link = new Link({
  content: burgerIcon,
  url: 'profile.html',
});

const chatList = chatsData.map(
  ({ username, sender, message, time }) =>
    new Chat({
      avatar: new Avatar({
        source: userAvatar,
      }),
      username: new Link({ content: username, url: 'chatSelected.html' }),
      sender,
      message,
      time,
    }),
);

const chats = new Sidebar({
  content: new Chats({
    profile: link,
    search: new Input({
      type: 'text',
      name: 'chatSearch',
    }),
    chatList,
  }),
});

const chatSelect = new ChatSelect({
  chats,
  content: new SystemMessage({
    message: 'Select a chat to start messaging',
  }),
});

render('#root', chatSelect);

// import Handlebars from 'handlebars';
// import sidebar from '../../components/sidebar';
// import chat from './components/chat';
// import input from '../../components/form/input';
// import link from '../../components/link';
// import avatar from '../../components/avatar';
// import profile from './components/profile';
// import chatsData from './utils';

// const chats = () => {
//   const template = Handlebars.compile(chatsTmpl, {
//     noEscape: true,
//   });
//   const profileLink = link.render({
//     content: profile.render({}),
//     url: 'profile.html',
//   });
//   const chatList = chatsData.map(({ username, sender, message, time }) =>
//     chat.render({
//       avatar: avatar.render({
//         source: require('../../../static/images/userAvatar.png'),
//       }),
//       username: link.render({ content: username, url: 'chatSelected.html' }),
//       sender,
//       message,
//       time,
//     }),
//   );

//   const content = sidebar.render({
//     content: template({
//       profile: profileLink,
//       search: input.render({}),
//       chatList,
//     }),
//   });
//   return content;
// };

// const chatSelect = main.render({
//   chats: chats(),
//   content: systemMessage.render({
//     message: 'Select a chat to start messaging',
//   }),
// });

// const root = document.querySelector('#root');

// if (root) {
//   root.innerHTML = chatSelect;
// }
