import { BlockProps } from '../../types';
import Button from '../button';

export interface ILink extends BlockProps {
  url: string;
  content: Button | string | HTMLElement;
}
