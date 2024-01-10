import PropTypes from 'prop-types';

// import components
import { MdEdit, MdDelete } from 'react-icons/md';

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
          <MdEdit className='action update' />
          <MdDelete className='action delete' />
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
          {experience.startDate} to{' '}
          {!experience.endDate ? 'Now' : experience.endDate}
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
