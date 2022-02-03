import Handlebars from 'handlebars';
import profileFormTmpl from './profileForm.tmpl';
import form from '../../../../components/form';
import input from '../../../../components/form/input';
// import button from '../../../../components/button';
import avatar from '../../../../components/avatar';
import fieldsData from './utils';

const profileForm = () => {
  const template = Handlebars.compile(profileFormTmpl, {
    noEscape: true,
  });

  const fields = fieldsData.map(({ name, placeholder, type }) =>
    input.render({ name, placeholder, type }),
  );

  const content = template({
    avatar: avatar.render({
      source: require('../../../../../static/images/profilePicture.png'),
    }),
    form: form.render({
      fields,
      // button: button.render({ type: 'submit', content: 'Save' }),
      vertical: true,
    }),
  });

  return content;
};

export default profileForm;
