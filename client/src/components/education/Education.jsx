import PropTypes from 'prop-types';

const Education = ({ education }) => {
  return <div>{education._id}</div>;
};
Education.propTypes = {
  education: PropTypes.object.isRequired,
};
export default Education;
