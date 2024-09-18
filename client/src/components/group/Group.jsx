import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import duration from 'dayjs/plugin/duration';

// import state
import { useDeleteGroupMutation } from '../../store/slices/resume/api-group';

// import components
import Modal from 'react-modal';
import Confirm from '../confirm/Confirm';
import LeadershipForm from './form/GroupForm';

// import icons
import { MdEdit, MdDelete } from 'react-icons/md';
// import * as MdIcons from 'react-icons/md';

// comfigure dayjs
dayjs.extend(duration);
dayjs.extend(relativeTime);

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

  const calculateDuration = (startdate, enddate) => {
    const start = startdate;
    const end = enddate;
    let duration;
    let remainder;
    let years;
    let months;

    if (!end) {
      duration = Math.abs(dayjs.duration(dayjs(start).diff()).asYears());
      years = Math.floor(
        Math.abs(dayjs.duration(dayjs(start).diff()).asYears())
      );
      remainder = duration - dayjs.duration({ years: years }).asYears();
      months = Math.round(dayjs.duration({ years: remainder }).asMonths());
      if (months === 12) {
        years = years + 1;
        months = 0;
      }
      return years === 0
        ? dayjs.duration({ months: months }).humanize()
        : months === 0
        ? dayjs.duration({ years: years }).humanize()
        : `${dayjs.duration({ years: years }).humanize()}, ${dayjs
            .duration({ months: months })
            .asMonths()} ${months > 1 ? 'months' : 'month'}`;
    } else {
      duration = dayjs.duration(dayjs(end).diff(start)).asYears();
      years = Math.floor(dayjs.duration(dayjs(end).diff(start)).asYears());
      remainder = duration - dayjs.duration({ years: years }).asYears();
      months = Math.round(dayjs.duration({ years: remainder }).asMonths());
      if (months === 12) {
        years = years + 1;
        months = 0;
      }
      return years === 0
        ? dayjs.duration({ months: months }).humanize()
        : months === 0
        ? dayjs.duration({ years: years }).humanize()
        : `${dayjs.duration({ years: years }).humanize()}, ${dayjs
            .duration({ months: months })
            .asMonths()} ${months > 1 ? 'months' : 'month'}`;
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
          groupId={group._id}
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
          <p className='dates'>
            {group.startDate !== ''
              ? dayjs(group.startDate).add(1, 'day').format('MMMM D, YYYY')
              : 'Now'}{' '}
            to{' '}
            {group.endDate !== ''
              ? dayjs(group.endDate).add(1, 'day').format('MMMM D, YYYY')
              : 'Now'}
          </p>
          <div className='separator'></div>
          <p className='duration'>
            {calculateDuration(group.startDate, group.endDate)}
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
