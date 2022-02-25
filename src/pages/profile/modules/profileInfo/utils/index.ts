import { ILink } from '../../../../../components/link/types';
import Avatar from '../../../../../components/avatar';
import profilePicture from '../../../../../../static/images/profilePicture.png';
import { IProfileInfo, ProfileFields } from '../types';
import { Indexed } from '../../../../../types';

export const profileLinks: ILink[] = [
  { url: 'profile-change', content: 'Change profile' },
  { url: 'password-change', content: 'Change password' },
  { url: 'login', content: 'Sign out' },
];

export const mapStateToProfile = ({ user }: Indexed) => {
  if (!user) {
    return {};
  }
  return Object.keys(user).reduce((acc, k) => {
    if (k in ProfileFields) {
      const key = k as keyof typeof ProfileFields;
      if (!acc.profileFields) {
        acc.profileFields = [];
      }
      acc.profileFields.push({
        label: ProfileFields[key],
        value: user[k] ?? '',
      });
    } else if (k === 'avatar') {
      acc.avatar = new Avatar({
        source: user[k] ?? profilePicture,
      });
    } else {
      acc.username = user[k];
    }
    return acc;
  }, {} as IProfileInfo);
};
