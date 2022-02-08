import { BlockProps } from '../../types';
import SystemMessage from './components/systemMessage';
import Sidebar from '../../components/sidebar';

export interface IChatSelect extends BlockProps {
  chats: Sidebar;
  content: SystemMessage;
}
