import { BlockProps } from '../../../../../../types';

export interface IMessage extends BlockProps {
  own: boolean;
  content: HTMLElement | string;
  status: string | HTMLElement;
  time: string;
}

export interface IMessageData {
  id: number;
  user_id: number;
  chat_id: number;
  type: string;
  time: string;
  content: string;
  is_read: boolean;
  file: File | null;
}
