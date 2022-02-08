import Block from '../../../../modules/block';
import template from './conversation.tmpl';

import ConversationInfo from './components/conversationInfo';
import Avatar from '../../../../components/avatar';
import Button from '../../../../components/button';
import Input from '../../../../components/form/input';
import Form from '../../../../components/form';
import Message from './components/message';
import ConversationActions from './components/conversationActions';

import { IConversation } from './types';
import infoIcon from '../../../../../static/icons/infoIcon';
import optionsIcon from '../../../../../static/icons/optionsIcon';
import userAvatar from '../../../../../static/images/userAvatar.png';
import { conversationData, validationSchema } from './utils';
import handleSubmit from '../../../../utils/functions/handleSubmit';
import handleInputChange from '../../../../utils/functions/handleInputChange';

export class Conversation extends Block<IConversation> {
  constructor(props: IConversation) {
    super(template, props);
  }

  render() {
    const { topBar, messages, bottomBar } = this.props;

    return this.compile({
      topBar,
      messages,
      bottomBar,
    });
  }
}

export function ConversationModule(): Conversation {
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

  const messageFields = [
    {
      input: new Input({
        name: 'message',
        placeholder: 'Write a message...',
        type: 'text',
      }),
    },
  ];

  messageFields[0].input.setProps({
    events: {
      blur: (e: FocusEvent) => {
        handleInputChange(messageFields[0].input, e);
      },
    },
  });

  const messageButton = new Button({
    type: 'submit',
    content: 'send message',
  });

  const messageForm = new Form({
    fields: messageFields,
    button: messageButton,
    events: {
      submit: (e: SubmitEvent) =>
        handleSubmit({ e, fields: messageFields, validationSchema }),
    },
  });

  const bottomBar = new ConversationActions({
    attachments: optionsButton,
    messageForm,
  });

  return new Conversation({
    topBar,
    messages,
    bottomBar,
  });
}