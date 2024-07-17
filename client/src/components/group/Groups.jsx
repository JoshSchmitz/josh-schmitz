import { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

// import components
import { MdAddCircleOutline } from 'react-icons/md';
import RingLoader from 'react-spinners/RingLoader';
import Modal from 'react-modal';
import Group from './Group';
import GroupForm from './form/GroupForm';

// import state
import { useGetGroupQuery } from '../../store/slices/resume/api-group';

const Groups = ({ resumeId }) => {
  // state
  const {
    data: groups,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetGroupQuery({ resumeId });

  // modal functions
  Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  return (
    <>
      <Modal
        className='modal-content'
        overlayClassName='modal-overlay'
        contentLabel='Create Group Modal'
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        preventScroll={false}
        shouldFocusAfterRender={false}
      >
        <GroupForm resumeId={resumeId} edit={false} toggleModal={toggleModal} />
      </Modal>
      <section className='section' id='groups'>
        <div className='headline'>
          <h1 className='title'>Groups</h1>
          <div className='actions'>
            <MdAddCircleOutline
              className='action create'
              onClick={toggleModal}
            />
          </div>
        </div>
        <hr />
        <div className='groups'>
          {isLoading && (
            <RingLoader className='loader-page' loading={isLoading} size={50} />
          )}
          {isError && <h1>Error: {error}</h1>}
          {isSuccess &&
            groups
              .filter((group) => group.title)
              .sort((a, b) => dayjs(b.date) - dayjs(a.date))
              .map((group) => {
                return (
                  <Group key={group._id} resume={resumeId} group={group} />
                );
              })}
        </div>
      </section>
    </>
  );
};
Groups.propTypes = {
  resumeId: PropTypes.string.isRequired,
};
export default Groups;
