import { IChatsInfo } from '../api/chats/types';
import { IUserInfo } from '../api/user/types';
import { IMessageData } from '../pages/chatSelected/modules/conversation/components/message/types';
import type WSService from '../utils/classes/wsService';

export interface IChat {
  socket: WSService;
  token: string;
  id: number;
  messages: IMessageData[];
  members?: IUserInfo[];
}

export type IChatInfo = Omit<IChat, 'socket' | 'token'>;

export interface IStoreState {
  chat?: IChatInfo;
  chats?: IChatsInfo[];
  chatsInfo?: IChat[];
  user?: IUserInfo;
}
