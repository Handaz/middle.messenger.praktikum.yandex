import Block from '../../modules/block';
import Chats from '../../modules/chats';
import Conversation from './modules/conversation';

import Chat from '../../modules/chats/components/chat';
import Message from './modules/conversation/components/message';
import ConversationInfo from './modules/conversation/components/conversationInfo';
import ConversationActions from './modules/conversation/components/conversationActions';
import Sidebar from '../../components/sidebar';
import Input from '../../components/form/input';
import Link from '../../components/link';
import Avatar from '../../components/avatar';
import Button from '../../components/button';
import Form from '../../components/form';

import { IChatSelected } from './types';
import main from '../../layouts/main';
import chatsData from '../../utils/chatsData';
import render from '../../utils/renderDom';
import burgerIcon from '../../../static/icons/burgerIcon.svg';
import infoIcon from '../../../static/icons/infoIcon.svg';
import optionsIcon from '../../../static/icons/optionsIcon.svg';
import userAvatar from '../../../static/images/userAvatar.png';
import conversationData from './utils';

class ChatSelected extends Block {
  constructor(props: IChatSelected) {
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

const infoButton = new Button({
  type: 'button',
  content: infoIcon,
});

const topBar = new ConversationInfo({
  avatar: new Avatar({
    source: userAvatar,
  }),
  username: 'test',
  button: infoButton,
});

const messages = conversationData.map(
  ({ own, content, status, time }) =>
    new Message({
      own,
      content,
      status,
      time,
    }),
);

const optionsButton = new Button({
  type: 'button',
  content: optionsIcon,
});

const messageField = new Input({
  name: 'message',
  placeholder: 'Write a message...',
  type: 'text',
});

const messageButton = new Button({
  type: 'submit',
  content: 'send message',
});

const messageForm = new Form({
  fields: [messageField],
  button: messageButton,
});

const bottomBar = new ConversationActions({
  attachments: optionsButton,
  messageForm,
});

const content = new Conversation({
  topBar,
  messages,
  bottomBar,
});

const chatSelected = new ChatSelected({
  chats,
  content,
});

render('#root', chatSelected);

// const conversation = () => {
//   const template = Handlebars.compile(conversationTmpl, {
//     noEscape: true,
//   });

//   const topBar = conversationInfo.render({
//     avatar: avatar.render({
//       source: require('../../../../../static/images/userAvatar.png'),
//     }),
//     username: 'test',
//     // button: button.render({ type: 'button', content: infoIcon }),
//   });

//   const messages = conversationData.map(({ own, content, status, time }) =>
//     message.render({
//       own,
//       content,
//       status,
//       time,
//     }),
//   );

//   const bottomBar = conversationActions.render({
//     // attachments: button.render({ type: 'button', content: optionsIcon }),
//     messageForm: form.render({
//       fields: [
//         input.render({
//           name: 'message',
//           placeholder: 'Write a message....',
//           type: 'text',
//         }),
//       ],
//       // button: button.render({ type: 'submit', content: 'send message' }),
//     }),
//   });

//   const content = `${template({ topBar, messages, bottomBar })}`;

//   return content;
// };
