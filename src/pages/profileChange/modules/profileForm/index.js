import Handlebars from 'handlebars';
import profileFormTmpl from './profileForm.tmpl';
import form from '../../../../components/form';
import input from '../../../../components/form/input';
import button from '../../../../components/button';

export const profileInfo = () => {
  const template = Handlebars.compile(profileFormTmpl, {
    noEscape: true,
  });

  const content = template({
    form,
  });

  return content;
};
