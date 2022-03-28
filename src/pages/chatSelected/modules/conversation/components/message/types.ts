import { BlockProps } from '../../../../../../types';
import { IResourcesData } from '../../../../api/types';

export interface IMessage extends BlockProps {
  own: boolean;
  content: HTMLElement | string;
  status: string | HTMLElement;
  time: string;
  filePath?: string;
}

export interface IMessageData {
  id: number;
  user_id: number;
  chat_id: number;
  type: string;
  time: string;
  content: string;
  is_read: boolean;
  file: IResourcesData | null;
}
