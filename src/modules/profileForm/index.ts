import Block from '../block';
import template from './profileForm.tmpl';

import Input from '../../components/form/input';
import Button from '../../components/button';
import Form from '../../components/form';
import Avatar from '../../components/avatar';

import { IProfileForm } from './types';
import { ValidationSchema } from '../../types';
import profilePicture from '../../../static/images/profilePicture.png';
import handleSubmit from '../../utils/functions/handleSubmit';

export class ProfileForm extends Block {
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
  fields: Input[],
  validationSchema: ValidationSchema,
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
      submit: (e: SubmitEvent) => handleSubmit({ e, fields, validationSchema }),
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
