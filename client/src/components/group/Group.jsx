import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

// import state
import { useDeleteGroupMutation } from '../../store/slices/resume/api-group';

// import components
import Modal from 'react-modal';
import Confirm from '../confirm/Confirm';
import LeadershipForm from './form/GroupForm';

// import icons
import { MdEdit, MdDelete } from 'react-icons/md';
// import * as MdIcons from 'react-icons/md';

const Group = ({ group, resume }) => {
  // generate icon
  // let Icon = '';
  // Icon = MdIcons[`${group.icon}`];

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
  const [deleteGroup, { deleteIsLoading }] = useDeleteGroupMutation();

  // delete leadership handler
  const handleDelete = () => {
    try {
      deleteGroup({
        resumeId: resume,
        groupId: group._id,
      });
      toast.warning('Group deleted');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Modal
        className='modal-content'
        overlayClassName='modal-overlay'
        contentLabel='Update Group Modal'
        isOpen={formIsOpen}
        onRequestClose={formModal}
        preventScroll={true}
        shouldFocusAfterRender={false}
      >
        <LeadershipForm
          resumeId={resume}
          leadershipId={group._id}
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
          message='Are you sure you want to delete this group?'
        />
      </Modal>
      <div
        className={group.highlighted ? 'group highlighted' : 'group'}
        key={group._id}
      >
        <div className='icon'>{/* <Icon /> */}</div>
        <div className='details'>
          <h3 className='group-title'>{group.title}</h3>
          <p className='description'>{group.description}</p>
          <p className='date'>
            {dayjs(group.date).add(1, 'day').format('MMMM D, YYYY')}
          </p>
        </div>
        <div className='actions'>
          <MdEdit className='action update' onClick={formModal} />
          <MdDelete className='action delete' onClick={confirmModal} />
        </div>
      </div>
    </>
  );
};
Group.propTypes = {
  group: PropTypes.object.isRequired,
  resume: PropTypes.string.isRequired,
};

export default Group;
