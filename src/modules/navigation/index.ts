import Handlebars from 'handlebars';
import navigationTmpl from './navigation.tmpl';
import link from '../../components/link';
import sidebar from '../../components/sidebar';

export const navigation = () => {
  const template = Handlebars.compile(navigationTmpl, {
    noEscape: true,
  });

  const navButton = link.render({
    content: 'Back to chats',
    url: 'chatSelect.html',
  });

  const content = template({ button: navButton });

  return sidebar.render({ content });
};
