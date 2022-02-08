import { BlockProps } from '../../types';
import Sidebar from '../../components/sidebar';
import { ProfileInfo } from './modules/profileInfo';

export interface IProfile extends BlockProps {
  sidebar: Sidebar;
  content: ProfileInfo;
}
