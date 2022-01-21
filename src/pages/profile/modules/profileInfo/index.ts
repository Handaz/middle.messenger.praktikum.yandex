import Handlebars from 'handlebars';
import profileInfoTmpl from './profileInfo.tmpl';
import link from '../../../../components/link';
import avatar from '../../../../components/avatar';
import { profileFields, profileLinks } from '../../utils';

const profileInfo = () => {
  const template = Handlebars.compile(profileInfoTmpl, {
    noEscape: true,
  });
  const links = profileLinks.map(({ url, content }) =>
    link.render({ url, content }),
  );

  const content = template({
    avatar: avatar.render({
      source: require('../../../../../static/images/profilePicture.png'),
    }),
    username: 'test',
    profileFields,
    links,
  });

  return content;
};

export default profileInfo;
