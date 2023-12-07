import { useSelector } from 'react-redux';

const ProfileBadge = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const getInitials = (name) => {
    let names = name.split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();
    if (name.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };

  return <div>{getInitials(userInfo.name)}</div>;
};
export default ProfileBadge;
