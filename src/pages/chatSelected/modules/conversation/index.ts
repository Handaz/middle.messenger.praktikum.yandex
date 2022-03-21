import Block from '../../../../modules/block';
import { ConversationInfoModule } from '../conversationInfo';
import template from './conversation.tmpl';

import Button from '../../../../components/button';
import Input from '../../../../components/form/input';
import Form from '../../../../components/form';
import ConversationActions from './components/conversationActions';
import Messages from './components/messages';

import ConversationController from './controller';
import { IConversation } from './types';
import optionsIcon from '../../../../../static/icons/optionsIcon';
import arrow from '../../../../../static/icons/arrow';
import handleInputChange from '../../../../utils/functions/handleInputChange';
import connect from '../../../../utils/functions/hoc';
import mapStateToConversation from './utils';

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

const conversation = connect<IConversation>(mapStateToConversation);

const ConversationHoc = conversation(Conversation);

export function ConversationModule(): Conversation {
  const optionsButton = new Button({
    type: 'button',
    content: optionsIcon,
    transparent: true,
  });

  const messageFields = [
    {
      input: new Input({
        name: 'message',
        placeholder: 'Write a message...',
        opaque: true,
        round: true,
        noautocomplete: true,
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
    content: arrow,
    round: true,
  });

  const messageForm = new Form({
    fields: messageFields,
    button: messageButton,
    events: {
      submit: (e: SubmitEvent) =>
        ConversationController.send({ e, fields: messageFields }),
    },
    styles: {
      gap: '10px',
    },
  });

  const bottomBar = new ConversationActions({
    attachments: optionsButton,
    messageForm,
  });

  return new ConversationHoc({
    topBar: ConversationInfoModule(),
    messages: new Messages({
      messages: [],
    }),
    bottomBar,
  });
}
