import { BlockProps } from '../../types';
import Sidebar from '../../components/sidebar';
import PasswordForm from './modules/passwordForm';

export interface IPasswordChange extends BlockProps {
  sidebar: Sidebar;
  content: PasswordForm;
}
