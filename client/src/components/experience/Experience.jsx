import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

// import components
import { MdEdit, MdDelete } from 'react-icons/md';

// import state
import { useDeleteExperienceMutation } from '../../store/slices/resume/api-experience';

const Experience = ({ experience, resume }) => {
  const [deleteExperience, { isLoading }] = useDeleteExperienceMutation();

  const handleDelete = () => {
    try {
      deleteExperience({
        resumeId: resume,
        experienceId: experience._id,
      });
      toast.warning('Experience deleted');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div
      className={
        experience.highlighted ? 'experience highlighted' : 'experience'
      }
    >
      <div className='headline'>
        <h2 className='position'>{experience.position}</h2>
        <div className='actions'>
          <MdEdit className='action update' /*onClick={ handleEdit }*/ />
          <MdDelete className='action delete' onClick={handleDelete} />
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
  resume: PropTypes.string.isRequired,
  experience: PropTypes.object.isRequired,
};
export default Experience;
