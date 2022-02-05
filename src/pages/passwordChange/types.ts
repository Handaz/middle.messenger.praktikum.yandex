import { BlockProps } from '../../types';
import Sidebar from '../../components/sidebar';
import ProfileForm from '../../modules/profileForm';

export interface IPasswordChange extends BlockProps {
  sidebar: Sidebar;
  content: ProfileForm;
}
