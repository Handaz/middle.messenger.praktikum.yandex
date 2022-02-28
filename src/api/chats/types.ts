export interface IUserChatInfo {
  first_name: string;
  second_name: string;
  display_name?: string;
  avatar: string | null;
  email: string;
  login: string;
  phone: string;
}

export interface ILastMessageInfo {
  user: IUserChatInfo;
  time: string;
  content: string;
}

export interface IChatsInfo {
  avatar: string | null;
  created_by: number;
  id: number;
  last_message: ILastMessageInfo | null;
  title: string;
  unread_count: number;
}

export interface IChatId {
  id: number;
}

export interface IChatToken {
  token: string;
}
