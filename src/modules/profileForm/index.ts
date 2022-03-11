import Block from '../block';
import template from './profileForm.tmpl';

import Button from '../../components/button';
import Form from '../../components/form';
import Avatar from '../../components/avatar';

import mapStateToProfileForm from './utils';
import ProfileChangeController from './controller';
import { IProfileForm } from './types';
import { IFields } from '../../components/form/types';
import profilePicture from '../../../static/images/profilePicture.png';
import connect from '../../utils/functions/hoc';
import classes from './profileForm.module.scss';

export class ProfileForm extends Block<IProfileForm> {
  constructor(props: IProfileForm) {
    super(template, props);
  }

  render() {
    const { avatar, form } = this.props;

    const blockClasses = {
      avatar: classes.avatar,
    };

    return this.compile({
      avatar,
      form,
      blockClasses,
    });
  }
}

const profileForm = connect<IProfileForm>(mapStateToProfileForm);

const ProfileFormHoc = profileForm(ProfileForm);

export function ProfileFormModule(
  fields: IFields[],
  action: 'profile' | 'password',
): ProfileForm {
  const button = new Button({
    type: 'submit',
    content: 'Save',
  });

  const form = new Form({
    fields,
    button,
    vertical: true,
    events: {
      submit: (e: SubmitEvent) => {
        if (action === 'profile') {
          ProfileChangeController.changeProfile({ fields, e });
        } else {
          ProfileChangeController.changePassword({ fields, e });
        }
      },
    },
  });

  const avatar = new Avatar({
    source: profilePicture,
  });

  return new ProfileFormHoc({
    avatar,
    form,
  });
}
