import Handlebars from 'handlebars';
import loginFormTmpl from './loginForm.tmpl';
import emptyForm from '../../../../components/form';
import button from '../../../../components/button';
import input from '../../../../components/form/input';
import contentBlock from '../../../../components/contentBlock';
import { fieldsData } from './utils';

export const loginForm = () => {
  const loginButton = button.render({
    content: 'Sign in',
    type: 'submit',
  });
  const fields = fieldsData.map(({ name, placeholder, type }) =>
    input.render({ name, placeholder, type })
  );
  const form = emptyForm.render({ fields, button: loginButton });
  const content = contentBlock.render({
    title: 'Sign in',
    content: form,
  });
  const template = Handlebars.compile(loginFormTmpl, {
    noEscape: true,
  });

  return template({ content });
};
