import ChatMembers from '../chatMembers';
import Avatar from '../../../../../../components/avatar';
import { BlockProps } from '../../../../../../types';

export interface IChatManagement extends BlockProps {
  avatar: Avatar;
  title: string;
  membersCount: number;
  members: ChatMembers;
}
