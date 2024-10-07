import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

// import state
import { useDeleteLeadershipMutation } from '../../store/slices/resume/api-leadership';

// import components
import Modal from 'react-modal';
import Confirm from '../confirm/Confirm';
import LeadershipForm from './form/LeadershipForm';

// import icons
import Icon from '../icon/Icon';

const Leadership = ({ leadership, resume }) => {
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
  const [deleteLeadership, { deleteIsLoading }] = useDeleteLeadershipMutation();

  // delete leadership handler
  const handleDelete = () => {
    try {
      deleteLeadership({
        resumeId: resume,
        leadershipId: leadership._id,
      });
      toast.warning('Leadership deleted');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Modal
        className='modal-content'
        overlayClassName='modal-overlay'
        contentLabel='Update Leadership Modal'
        isOpen={formIsOpen}
        onRequestClose={formModal}
        preventScroll={true}
        shouldFocusAfterRender={false}
      >
        <LeadershipForm
          resumeId={resume}
          leadershipId={leadership._id}
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
          message='Are you sure you want to delete this leadership?'
        />
      </Modal>
      <div
        className={
          leadership.highlighted ? 'leadership highlighted' : 'leadership'
        }
        key={leadership._id}
      >
        <Icon icon={leadership.icon} />
        <div className='details'>
          <h3 className='lead-title'>{leadership.title}</h3>
          <p className='description'>{leadership.description}</p>
          <p className='date'>
            {dayjs(leadership.date).format('MMMM D, YYYY')}
          </p>
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
Leadership.propTypes = {
  leadership: PropTypes.object.isRequired,
  resume: PropTypes.string.isRequired,
};

export default Leadership;
