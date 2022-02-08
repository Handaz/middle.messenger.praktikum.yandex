import { BlockProps } from '../../types';
import ContentBlock from '../../components/contentBlock';
import Link from '../../components/link';

export interface ILogin extends BlockProps {
  form: ContentBlock;
  link: Link;
}
