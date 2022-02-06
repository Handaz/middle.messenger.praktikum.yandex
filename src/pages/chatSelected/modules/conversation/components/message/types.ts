import { BlockProps } from '../../../../../../types';

export interface IMessage extends BlockProps {
  own: boolean;
  content: HTMLElement | string;
  status: string | null;
  time: string;
}
