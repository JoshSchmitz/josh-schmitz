import PropTypes from 'prop-types';

const Project = () => {
  return <div>Project</div>;
};
Project.propTypes = {
  project: PropTypes.object.isRequired,
  resume: PropTypes.string.isRequired,
};
export default Project;
