import { BlockProps } from '../../../../types';
import Avatar from '../../../../components/avatar';
import Link from '../../../../components/link';

export interface IProfileInfo extends BlockProps {
  avatar: Avatar;
  username: string;
  profileFields: IProfileField[];
  links: Link[];
}

export interface IProfileField {
  label: string;
  value: string;
}

export enum ProfileFields {
  email = 'Email',
  first_name = 'Name',
  second_name = 'Surname',
  display_name = 'Chat name',
  phone = 'Phone',
}
