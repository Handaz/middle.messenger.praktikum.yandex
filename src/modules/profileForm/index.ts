import template from './profileForm.tmpl';
import Block from '../block';
import { IProfileForm } from './types';

import Input from '../../components/form/input';
import Button from '../../components/button';
import Form from '../../components/form';
import Avatar from '../../components/avatar';

import profilePicture from '../../../static/images/profilePicture.png';
import getFormValues from '../../utils/getFormValues';

class ProfileForm extends Block {
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

export default function profileForm(fields: Input[]): ProfileForm {
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
        e.preventDefault();
        console.log(getFormValues(e.target));
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
