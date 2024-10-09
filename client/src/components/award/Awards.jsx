import { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

// import components
import Icon from '../icon/Icon';
import RingLoader from 'react-spinners/RingLoader';
import Modal from 'react-modal';
import Award from './Award';
import AwardForm from './form/AwardForm';

// import state
import { useGetResumeQuery } from '../../store/slices/resume/api-resume';
import { useGetAwardQuery } from '../../store/slices/resume/api-award';

const Awards = ({ resumeId }) => {
  // current user id and resume user id
  const { userInfo } = useSelector((state) => state.auth);
  const {
    data: { user },
  } = useGetResumeQuery({ resumeId });

  // state
  const {
    data: awards,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAwardQuery({ resumeId });

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
        contentLabel='Create Award Modal'
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        preventScroll={false}
        shouldFocusAfterRender={false}
      >
        <AwardForm resumeId={resumeId} edit={false} toggleModal={toggleModal} />
      </Modal>
      <section className='section' id='awards'>
        <div className='headline'>
          <h1 className='title'>Awards</h1>
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
        <div className='awards'>
          {isLoading && (
            <RingLoader className='loader-page' loading={isLoading} size={50} />
          )}
          {isError && <h1>Error: {error}</h1>}
          {isSuccess &&
            awards
              .filter((aw) => aw.title)
              .sort((a, b) => dayjs(b.date) - dayjs(a.date))
              .map((aw) => {
                return (
                  <Award
                    key={aw._id}
                    award={aw}
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
Awards.propTypes = {
  resumeId: PropTypes.string.isRequired,
};
export default Awards;
