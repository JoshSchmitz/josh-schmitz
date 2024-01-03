import PropTypes from 'prop-types';

const Experience = ({ experience }) => {
  return (
    <div
      className={
        experience.highlighted ? 'experience highlighted' : 'experience'
      }
    >
      <div className='headline'>
        <h2 className='position'>{experience.position}</h2>
        <div className='actions'>
          {/* <MdEdit className='action'></MdEdit>
          <MdDelete className='action' onClick={props.delete}></MdDelete> */}
        </div>
      </div>
      <div className='details'>
        <h3 className='company'>{experience.company.name} -</h3>
        <h3 className='location'>
          {experience.company.location.city},{' '}
          {experience.company.location.state}
        </h3>
        <div className='break'></div>
        <h4 className='time'>
          {experience.startdate} to{' '}
          {!experience.enddate ? 'Now' : experience.enddate}
        </h4>
      </div>
      <p className='description'>{experience.description}</p>
    </div>
  );
};
Experience.propTypes = {
  experience: PropTypes.object.isRequired,
};
export default Experience;
