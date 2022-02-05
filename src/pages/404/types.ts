import Link from '../../components/link';
import { BlockProps } from '../../types';

export interface IError404 extends BlockProps {
  code: string;
  text: string;
  link: Link;
}
