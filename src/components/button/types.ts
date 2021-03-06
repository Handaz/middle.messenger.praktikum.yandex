import { BlockProps } from '../../types';

export interface IButton extends BlockProps {
  type: 'button' | 'reset' | 'submit';
  content: string | HTMLElement;
  transparent?: boolean;
  round?: boolean;
}
