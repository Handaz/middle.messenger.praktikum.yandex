import Handlebars from 'handlebars';
import registerFormTmpl from './registerForm.tmpl';
import emptyForm from '../../../../components/form';
import button from '../../../../components/button';
import input from '../../../../components/form/input';
import contentBlock from '../../../../components/contentBlock';
import { fieldsData } from './utils';

export const registerForm = () => {
  const registerButton = button.render({
    content: 'Sign in',
    type: 'submit',
  });
  const fields = fieldsData.map(({ name, placeholder, type }) =>
    input.render({ name, placeholder, type })
  );
  const form = emptyForm.render({
    fields,
    button: registerButton,
    vertical: true,
  });
  const content = contentBlock.render({
    title: 'Sign up',
    content: form,
  });
  const template = Handlebars.compile(registerFormTmpl, {
    noEscape: true,
  });
  return template({ content });
};
