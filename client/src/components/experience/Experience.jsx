import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { useState } from 'react';
import { toast } from 'react-toastify';

// import components
import Modal from 'react-modal';
import ExperienceForm from './form/ExperienceForm';
import Confirm from '../confirm/Confirm';
import { MdEdit, MdDelete } from 'react-icons/md';

// import state
import { useDeleteExperienceMutation } from '../../store/slices/resume/api-experience';

const Experience = ({ experience, resume }) => {
  // modal functions
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);
  const confirmModal = () => {
    setConfirmIsOpen(!confirmIsOpen);
  };
  const [formIsOpen, setFormIsOpen] = useState(false);
  const formModal = () => {
    setFormIsOpen(!formIsOpen);
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
        contentLabel='Update Experience Modal'
        isOpen={formIsOpen}
        onRequestClose={formModal}
        preventScroll={true}
        shouldFocusAfterRender={false}
      >
        <ExperienceForm
          resumeId={resume}
          experienceId={experience._id}
          edit={true}
          toggleModal={formModal}
        />
      </Modal>
      <Modal
        className='modal-content'
        overlayClassName='modal-overlay'
        contentLabel='Confirm Modal'
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
            <MdEdit className='action update' onClick={formModal} />
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
            {experience.startDate !== ''
              ? dayjs(experience.startDate).add(1, 'day').format('MMMM D, YYYY')
              : 'Now'}{' '}
            to{' '}
            {experience.endDate !== ''
              ? dayjs(experience.endDate).add(1, 'day').format('MMMM D, YYYY')
              : 'Now'}
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
