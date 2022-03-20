import { IChatsInfo } from '../api/chats/types';
import { IUserInfo } from '../api/user/types';
import { IMessageData } from '../pages/chatSelected/modules/conversation/components/message/types';
import type WSService from '../utils/classes/wsService';

export interface IChat {
  socket: WSService;
  token: string;
  id: number;
  messages: IMessageData[] | null;
  members: IUserInfo[] | null;
  avatar: string | null;
  title: string;
}

export interface IChatInfo
  extends Omit<IChat, 'socket' | 'token' | 'messages'> {
  messages?: IMessageData[];
}

export interface IStoreState {
  areSocketsReady?: boolean;
  chat?: IChatInfo;
  chats?: IChatsInfo[];
  chatsInfo?: IChat[];
  user?: IUserInfo;
  foundUsers?: IUserInfo[];
}
