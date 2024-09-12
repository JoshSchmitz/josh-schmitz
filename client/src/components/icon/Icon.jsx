import React from 'react';
import PropTypes from 'prop-types';

// import icons
import * as MdIcons from 'react-icons/md';
// import * as AiIcons from 'react-icons/ai';
// import * as BsIcons from 'react-icons/bs';
// import * as BiIcons from 'react-icons/bi';

const Icon = ({ icon }) => {
  const DisplayIcon = (iconName) => {
    if (iconName.startsWith('Md')) {
      return MdIcons[iconName];
    }
  };

  return <>{React.createElement(DisplayIcon(icon))}</>;
};
Icon.propTypes = {
  icon: PropTypes.any,
};

export default Icon;
