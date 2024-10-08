import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

// import components
import Icon from '../icon/Icon';
import RingLoader from 'react-spinners/RingLoader';
import Modal from 'react-modal';
import Leadership from './Leadership';
import LeadershipForm from './form/LeadershipForm';

// import state
import { useGetLeadershipQuery } from '../../store/slices/resume/api-leadership';
import { useGetResumeQuery } from '../../store/slices/resume/api-resume';

const Leaderships = ({ resumeId }) => {
  // current user id and resume user id
  const { userInfo } = useSelector((state) => state.auth);
  const {
    data: { user },
  } = useGetResumeQuery({ resumeId });

  // state
  const {
    data: leaderships,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLeadershipQuery({ resumeId });

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
        contentLabel='Create Leadership Modal'
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        preventScroll={false}
        shouldFocusAfterRender={false}
      >
        <LeadershipForm
          resumeId={resumeId}
          edit={false}
          toggleModal={toggleModal}
        />
      </Modal>
      <section className='section' id='leadership'>
        <div className='headline'>
          <h1 className='title'>Leadership</h1>
          {userInfo && userInfo._id === user && (
            <div className='actions'>
              <Icon
                icon='MdAddCircleOutline'
                className='action create'
                onClick={toggleModal}
              />
            </div>
          )}
        </div>
        <hr />
        <div className='leaderships'>
          {isLoading && (
            <RingLoader className='loader-page' loading={isLoading} size={50} />
          )}
          {isError && <h1>Error: {error}</h1>}
          {isSuccess &&
            leaderships
              .filter((lead) => lead.title)
              .sort((a, b) => dayjs(b.date) - dayjs(a.date))
              .map((lead) => {
                return (
                  <Leadership
                    key={lead._id}
                    leadership={lead}
                    resume={resumeId}
                    user={user}
                  />
                );
              })}
        </div>
      </section>
    </>
  );
};
Leaderships.propTypes = {
  resumeId: PropTypes.string.isRequired,
};

export default Leaderships;
