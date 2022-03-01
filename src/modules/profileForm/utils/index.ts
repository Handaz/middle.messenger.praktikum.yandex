import Avatar from '../../../components/avatar';

import profilePicture from '../../../../static/images/profilePicture.png';
import { Indexed } from '../../../types';
import { staticUrl } from '../../../utils/classes/request';

const mapStateToProfileForm = ({ user }: Indexed) => {
  const avatar = new Avatar({
    source: user && user.avatar ? `${staticUrl}${user.avatar}` : profilePicture,
  });

  return {
    avatar,
  };
};

export default mapStateToProfileForm;
