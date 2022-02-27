import Avatar from '../../../../../components/avatar';
import { ILink } from '../../../../../components/link/types';
import Modal from '../../../../../components/modal';
import Form from '../../../../../components/form';
import FileInput from '../../../../../components/form/fileInput';
import FormError from '../../../../../components/form/error';
import Button from '../../../../../components/button';
import ContentBlock from '../../../../../components/contentBlock';

import ProfileController from '../controller';
import profilePicture from '../../../../../../static/images/profilePicture.png';
import { IProfileInfo, ProfileFields } from '../types';
import { Indexed } from '../../../../../types';
import { staticUrl } from '../../../../../utils/classes/request';

export const profileLinks: ILink[] = [
  { url: 'profile-change', content: 'Change profile' },
  { url: 'password-change', content: 'Change password' },
  { url: 'login', content: 'Sign out' },
];

const fields = [
  {
    input: new FileInput({
      name: 'avatar',
      label: 'Choose a file on your desktop',
    }),
    error: new FormError({ error: '' }),
  },
];

const modal = new Modal({
  content: '',
  isModalOpen: false,
});

const callback = () => modal.setProps({ isModalOpen: false });

const form = new Form({
  fields,
  vertical: true,
  button: new Button({ type: 'submit', content: 'Change' }),
  events: {
    submit: (e: SubmitEvent) =>
      ProfileController.changeAvatar({ e, fields }, callback),
  },
});

const content = new ContentBlock({
  title: 'Upload a file',
  content: form,
});

modal.setProps({ content });

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
      const avatar = new Avatar({
        source: user[k] ? `${staticUrl}${user[k]}` : profilePicture,
        events: {
          click: () => modal.setProps({ isModalOpen: true }),
        },
      });

      acc.avatar = avatar;
      acc.modal = modal;
    } else {
      acc.username = user[k];
    }
    return acc;
  }, {} as IProfileInfo);
};
