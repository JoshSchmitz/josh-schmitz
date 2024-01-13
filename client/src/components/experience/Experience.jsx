import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';

// import components
import Modal from 'react-modal';
import Confirm from '../confirm/Confirm';
import { MdEdit, MdDelete } from 'react-icons/md';

// import state
import { useDeleteExperienceMutation } from '../../store/slices/resume/api-experience';

const Experience = ({ experience, resume }) => {
  // modal functions
  Modal.setAppElement('#root');
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);
  const confirmModal = () => {
    setConfirmIsOpen(!confirmIsOpen);
  };

  const [deleteExperience, { deleteIsLoading }] = useDeleteExperienceMutation();

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
    <>
      <Modal
        className='modal-content'
        overlayClassName='modal-overlay'
        contentLabel='Create Experience Modal'
        isOpen={confirmIsOpen}
        onRequestClose={confirmModal}
        preventScroll={true}
        shouldFocusAfterRender={false}
      >
        <Confirm
          confirm={handleDelete}
          confirmLabel='Delete'
          loading={deleteIsLoading}
          close={confirmModal}
          closeLabel='Cancel'
          message='Are you sure you want to delete this experience?'
        />
      </Modal>
      <div
        className={
          experience.highlighted ? 'experience highlighted' : 'experience'
        }
      >
        <div className='headline'>
          <h2 className='position'>{experience.position}</h2>
          <div className='actions'>
            <MdEdit className='action update' /*onClick={ handleEdit }*/ />
            <MdDelete className='action delete' onClick={confirmModal} />
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
    </>
  );
};
Experience.propTypes = {
  resume: PropTypes.string.isRequired,
  experience: PropTypes.object.isRequired,
};
export default Experience;
