import { BlockProps } from '../../types';
import Sidebar from '../../components/sidebar';
import { ProfileForm } from '../../modules/profileForm';

export interface IProfileChange extends BlockProps {
  sidebar: Sidebar;
  content: ProfileForm;
}
