import Store from '../../../store';
import { Indexed } from '../../../types';

const socketUrl = 'wss://ya-praktikum.tech/ws/chats/';

export enum WSServiceEvents {
  OPEN = 'open',
  MESSAGE = 'message',
  ERROR = 'error',
  CLOSE = 'close',
}

export enum WSServiceMessageTypes {
  MESSAGE = 'message',
  GetOld = 'get old',
  PING = 'ping',
}

const { OPEN, MESSAGE, ERROR, CLOSE } = WSServiceEvents;

export default class WSService {
  socket: WebSocket;

  private _id: number;

  private _userId: number;

  private _token: string;

  constructor(userId: number, chatId: number, token: string) {
    this._id = chatId;
    this._userId = userId;
    this._token = token;
    this.openSocket();
  }

  openSocket() {
    this.socket = new WebSocket(
      `${socketUrl}${this._userId}/${this._id}/${this._token}`,
    );

    setInterval(() => {
      this.send('', WSServiceMessageTypes.PING);
    }, 30000);

    this.socket.addEventListener(OPEN, this.handleOpen);
    this.socket.addEventListener(MESSAGE, this.handleMessage.bind(this));
    this.socket.addEventListener(ERROR, this.handleError);
    this.socket.addEventListener(CLOSE, this.handleClose.bind(this));
  }

  getChatHistory() {
    this.socket.send(
      JSON.stringify({
        content: '0',
        type: 'get old',
      }),
    );
  }

  send(
    content: string | Blob | ArrayBuffer | ArrayBufferView,
    type: WSServiceMessageTypes,
  ) {
    this.socket.send(
      JSON.stringify({
        content,
        type,
      }),
    );
  }

  close() {
    this.socket.close();
  }

  handleOpen(e: Event) {
    console.log('Соединение установлено', e);

    if (!Store.getState().areSocketsReady) {
      const { chatsInfo } = Store.getState();

      const areSocketsReady = chatsInfo?.every(
        ({ socket }) => socket.socket.readyState === 1,
      );

      Store.set('areSocketsReady', areSocketsReady);
    }
  }

  handleMessage(e: MessageEvent) {
    const data = JSON.parse(e.data);
    const { chatsInfo, chat } = Store.getState();

    if (Array.isArray(data)) {
      Store.set('chat.messages', data);
    } else if (data.type !== 'message') {
      return;
    } else if (chat && chat.messages && chat.id === this._id) {
      chat.messages.unshift(data);
      Store.set('chat', chat);
    }

    if (!chatsInfo) {
      throw new Error('No chats info available');
    }

    const currChats = chatsInfo.map((item: Indexed) => {
      if (item.id === this._id) {
        if (item.messages) {
          if (Array.isArray(data)) {
            item.messages = item.messages.concat(data);
          } else {
            item.messages.unshift(data);
          }
        } else {
          item.messages = data;
        }
      }
      return item;
    });

    Store.set('chatsInfo', currChats);
  }

  handleError(e: ErrorEvent) {
    console.log('Ошибка', e.message);
  }

  handleClose(e: CloseEvent) {
    if (e.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения');
    }

    console.log(`Код: ${e.code} | Причина: ${e.reason}`);
  }
}
