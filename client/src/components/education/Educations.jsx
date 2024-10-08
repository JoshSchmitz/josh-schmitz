import PropTypes from 'prop-types';
import { useState } from 'react';
import { useSelector } from 'react-redux';

// import components
import Icon from '../icon/Icon';
import Modal from 'react-modal';
import RingLoader from 'react-spinners/RingLoader';
import Education from './Education';
import EducationForm from './form/EducationForm';

//import state
import { useGetEducationQuery } from '../../store/slices/resume/api-education';
import { useGetResumeQuery } from '../../store/slices/resume/api-resume';

const Educations = ({ resumeId }) => {
  // current user id and resume user id
  const { userInfo } = useSelector((state) => state.auth);
  const {
    data: { user },
  } = useGetResumeQuery({ resumeId });

  const {
    data: eds,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetEducationQuery({ resumeId });

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
        contentLabel='Create Experience Modal'
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        preventScroll={false}
        shouldFocusAfterRender={false}
      >
        <EducationForm
          resumeId={resumeId}
          edit={false}
          toggleModal={toggleModal}
        />
      </Modal>
      <section className='section' id='educations'>
        <div className='headline'>
          <h1 className='title'>Education</h1>
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
        <div className='educations'>
          {isLoading && (
            <RingLoader className='loader-page' loading={isLoading} size={50} />
          )}
          {isError && <h1>Error: {error}</h1>}
          {isSuccess &&
            eds.map((ed) => {
              return (
                <Education
                  key={ed._id}
                  education={ed}
                  resume={resumeId}
                  user={user}
                ></Education>
              );
            })}
        </div>
      </section>
    </>
  );
};
Educations.propTypes = {
  resumeId: PropTypes.string.isRequired,
};
export default Educations;
