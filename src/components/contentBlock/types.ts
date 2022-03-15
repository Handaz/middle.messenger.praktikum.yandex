import Block from '../../modules/block';
import { BlockProps } from '../../types';
import Link from '../link';

export interface IContentBlock extends BlockProps {
  title: string;
  content: string | Block;
  authForm?: boolean;
  link?: Link;
}
