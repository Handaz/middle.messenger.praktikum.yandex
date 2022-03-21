import Message from '../message';
import Loader from '../../../../../../components/loader';
import { BlockProps } from '../../../../../../types';

export interface IMessages extends BlockProps {
  messages: Message[];
  loader?: boolean;
  loaderComponent?: typeof Loader;
}
