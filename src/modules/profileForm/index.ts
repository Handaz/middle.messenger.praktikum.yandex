import Block from '../block';
import template from './profileForm.tmpl';

import Button from '../../components/button';
import Form from '../../components/form';
import Avatar from '../../components/avatar';

import ProfileChangeController from './controller';
import { IProfileForm } from './types';
import { IFields } from '../../components/form/types';
import profilePicture from '../../../static/images/profilePicture.png';

export class ProfileForm extends Block<IProfileForm> {
  constructor(props: IProfileForm) {
    super(template, props);
  }

  render() {
    const { avatar, form } = this.props;

    return this.compile({
      avatar,
      form,
    });
  }
}

export function ProfileFormModule(
  fields: IFields[],
  // submitAction: (_params?: FormControllerProps) => void,
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
        }
      },
    },
  });

  const avatar = new Avatar({
    source: profilePicture,
  });

  return new ProfileForm({
    avatar,
    form,
  });
}
