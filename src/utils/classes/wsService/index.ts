import Store from '../../../store';
import UserApi from '../../../api/user';
import catchDec from '../../decorators/catchDec';

const socketUrl = 'wss://ya-praktikum.tech/ws/chats/';

export interface IMessageData {
  content: string;
  id: number;
  time: string;
  type: WSServiceMessageTypes;
  user_id: number;
}

export enum WSServiceEvents {
  OPEN = 'open',
  MESSAGE = 'message',
  ERROR = 'error',
  CLOSE = 'close',
}

export enum WSServiceMessageTypes {
  MESSAGE = 'message',
  FILE = 'file',
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

    this.socket.addEventListener(OPEN, this.handleOpen);
    this.socket.addEventListener(MESSAGE, this.handleMessage.bind(this));
    this.socket.addEventListener(ERROR, this.handleError);
    this.socket.addEventListener(CLOSE, this.handleClose.bind(this));
  }

  getChatHistory(messageCount?: number) {
    this.socket.send(
      JSON.stringify({
        content: messageCount ?? '0',
        type: 'get old',
      }),
    );
  }

  send(type: WSServiceMessageTypes, content: string) {
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

    setInterval(() => {
      this.send(WSServiceMessageTypes.PING, '');
    }, 30000);

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
    const { chat, chatsInfo } = Store.getState();

    if (Array.isArray(data)) {
      if (chat?.messages) {
        Store.set('chat.messages', chat.messages.concat(data));
      } else {
        Store.set('chat.messages', data);
      }
    } else if (
      data.type !== WSServiceMessageTypes.MESSAGE &&
      data.type !== WSServiceMessageTypes.FILE
    ) {
      return;
    }

    if (!chatsInfo) {
      throw new Error('No chats info available');
    }

    const currChats = chatsInfo.map((item) => {
      if (item.id === this._id) {
        if (item.messages) {
          if (Array.isArray(data)) {
            item.messages = item.messages.concat(data);
          } else {
            item.messages.unshift(data);
          }
        } else {
          item.messages = Array.isArray(data) ? data : [data];
        }
      }
      return item;
    });

    Store.set('chatsInfo', currChats);

    if (!Array.isArray(data)) {
      this.updateChats(data);
    }
  }

  @catchDec
  async updateChats(data: IMessageData) {
    const { chats, chat } = Store.getState();

    const user = await UserApi.getUser(data.user_id);

    Store.set(
      'chats',
      chats?.map((item) => {
        if (item.id === this._id) {
          if (chat?.id !== this._id) {
            item.unread_count++;
          }
          item.last_message = {
            time: data.time,
            content: data.content,
            user,
          };
        }
        return item;
      }),
    );
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
