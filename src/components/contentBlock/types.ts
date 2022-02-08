import Block from '../../modules/block';
import { BlockProps } from '../../types';

export interface IContentBlock extends BlockProps {
  title: string;
  content: string | Block;
  authForm?: boolean;
}
