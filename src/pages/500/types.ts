import { BlockProps } from '../../types';
import Link from '../../components/link';

export interface IError500 extends BlockProps {
  code: string;
  text: string;
  link: Link;
}
