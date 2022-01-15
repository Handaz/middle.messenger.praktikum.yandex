import Handlebars from 'handlebars';
import profileInfoTmpl from './profileInfo.tmpl';
import input from '../../../../components/form/input';
import link from '../../../../components/link';
import { profileFields } from '../../utils';

export const profileInfo = () => {
  const template = Handlebars.compile(profileInfoTmpl, {
    noEscape: true,
  });

  const content = template({
    avatar: input.render({
      type: 'file',
      name: 'avatar',
      placeholder: 'avatar',
    }),
    username: 'test',
    profileFields,
    links: ['link'],
  });

  return content;
};
