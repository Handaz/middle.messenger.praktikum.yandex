import Handlebars from 'handlebars';
import conversationTmpl from './conversation.tmpl';
import conversationInfo from './components/conversationInfo';
import conversationActions from './components/conversationActions';
import avatar from '../../../../components/avatar';
import button from '../../../../components/button';
import message from './components/message';
import input from '../../../../components/form/input';
import form from '../../../../components/form';
import { conversationData, infoIcon, optionsIcon } from './utils';

const conversation = () => {
  const template = Handlebars.compile(conversationTmpl, {
    noEscape: true,
  });

  const topBar = conversationInfo.render({
    avatar: avatar.render({
      source: require('../../../../../static/images/userAvatar.png'),
    }),
    username: 'test',
    button: button.render({ type: 'button', content: infoIcon }),
  });

  const messages = conversationData.map(({ own, content, status, time }) =>
    message.render({
      own,
      content,
      status,
      time,
    }),
  );

  const bottomBar = conversationActions.render({
    attachments: button.render({ type: 'button', content: optionsIcon }),
    messageForm: form.render({
      fields: [
        input.render({
          name: 'message',
          placeholder: 'Write a message....',
          type: 'text',
        }),
      ],
      button: button.render({ type: 'submit', content: 'send message' }),
    }),
  });

  const content = `${template({ topBar, messages, bottomBar })}`;

  return content;
};

export default conversation;
