import Block from '../block';
import chatsTmpl from './chats.tmpl';

import Input from '../../components/form/input';
import Link from '../../components/link';
import Button from '../../components/button';
import ContentBlock from '../../components/contentBlock';
import Form from '../../components/form';
import Modal from '../../components/modal';
import FormError from '../../components/form/error';
import Loader from '../../components/loader';
import Label from '../../components/form/label';

import ChatsController from './controller';
import Store from '../../store';
import { IChats } from './types';
import burgerIcon from '../../../static/icons/burgerIcon';
import connect from '../../utils/functions/hoc';
import mapStateToChats, { chatAddFields } from './utils';
import classes from './chats.module.scss';

export class Chats extends Block<IChats> {
  constructor(props: IChats) {
    super(chatsTmpl, props);
  }

  render() {
    const {
      profile,
      search,
      chatList,
      chatAdd,
      modal,
      loader,
      loaderComponent,
      loadChats,
    } = this.props;
    const { chats, user } = Store.getState();

    if (!chats && user) {
      ChatsController.getChats({ limit: 10 });
    }

    const blockClasses = {
      chats: classes.chats,
      header: classes.header,
      loader: classes.loader,
      chatAdd: classes.chatAdd,
      modalWrapper: classes.modalWrapper,
      searchWrapper: classes.searchWrapper,
      chatList: classes.chatList,
      loadChats: classes.loadChats,
    };

    return this.compile({
      profile,
      search,
      chatAdd,
      modal,
      chatList,
      loader,
      loaderComponent,
      blockClasses,
      loadChats,
    });
  }
}

const chats = connect<IChats>(mapStateToChats);

const ChatsHoc = chats(Chats);

export function ChatsModule(): Chats {
  const link = new Link({
    content: burgerIcon,
    url: 'profile',
  });

  const search = new Input({
    type: 'text',
    name: 'chatSearch',
    placeholder: 'Search',
    events: {
      keyup: (e: InputEvent) => {
        const input = e.target as HTMLInputElement;
        console.log(input.value);
      },
    },
    opaque: true,
  });

  const fields = chatAddFields.map(({ name, placeholder, type }) => ({
    input: new Input({ type, name, placeholder }),
    error: new FormError({}),
    label: new Label({ label: 'Chat title', name }),
  }));

  const modal = new Modal({
    content: '',
    isModalOpen: false,
  });

  const callback = () => modal.setProps({ isModalOpen: false });

  const form = new Form({
    fields,
    button: new Button({
      type: 'submit',
      content: 'Create',
    }),
    styles: {
      gap: '20px',
    },
    events: {
      submit: (e: SubmitEvent) =>
        ChatsController.createChat({ e, fields }, callback),
    },
  });

  const content = new ContentBlock({
    title: 'Create new chat',
    content: form,
  });

  modal.setProps({ content });

  const chatAdd = new Button({
    type: 'button',
    content: '+',
    transparent: true,
    events: {
      click: () => modal.setProps({ isModalOpen: true }),
    },
  });

  const loadChats = new Button({
    type: 'button',
    content: 'Load more...',
    transparent: true,
    events: {
      click: () => {
        ChatsController.getChats();
      },
    },
  });

  return new ChatsHoc({
    profile: link,
    search,
    chatAdd,
    modal,
    loader: true,
    loadChats,
    loaderComponent: Loader,
    chatList: [],
  });
}
