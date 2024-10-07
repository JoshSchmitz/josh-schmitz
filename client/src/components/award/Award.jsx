import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

// import state
import { useDeleteAwardMutation } from '../../store/slices/resume/api-award';

// import components
import Modal from 'react-modal';
import Confirm from '../confirm/Confirm';
import AwardForm from './form/AwardForm';
import Icon from '../icon/Icon';

const Award = ({ award, resume }) => {
  // modal functions
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);
  const confirmModal = () => {
    setConfirmIsOpen(!confirmIsOpen);
  };
  const [formIsOpen, setFormIsOpen] = useState(false);
  const formModal = () => {
    setFormIsOpen(!formIsOpen);
  };

  // redux state
  const [deleteLeadership, { deleteIsLoading }] = useDeleteAwardMutation();

  // delete leadership handler
  const handleDelete = () => {
    try {
      deleteLeadership({
        resumeId: resume,
        awardId: award._id,
      });
      toast.warning('Award deleted');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Modal
        className='modal-content'
        overlayClassName='modal-overlay'
        contentLabel='Update Award Modal'
        isOpen={formIsOpen}
        onRequestClose={formModal}
        preventScroll={true}
        shouldFocusAfterRender={false}
      >
        <AwardForm
          resumeId={resume}
          awardId={award._id}
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
          message='Are you sure you want to delete this award?'
        />
      </Modal>
      <div
        className={award.highlighted ? 'award highlighted' : 'award'}
        key={award._id}
      >
        <Icon icon={award.icon} />
        <div className='details'>
          <div className='headline'>
            <h3 className='lead-title'>{award.title}</h3>
            <div className='separator' />
            <p className='date'>{dayjs(award.date).format('MMMM D, YYYY')}</p>
          </div>

          <p className='description'>{award.description}</p>
        </div>
        <div className='actions'>
          <Icon icon='MdEdit' className='action update' onClick={formModal} />
          <Icon
            icon='MdDelete'
            className='action delete'
            onClick={confirmModal}
          />
        </div>
      </div>
    </>
  );
};
Award.propTypes = {
  award: PropTypes.object.isRequired,
  resume: PropTypes.string.isRequired,
};

export default Award;
