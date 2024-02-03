import PropTypes from 'prop-types';
import { useState } from 'react';

// import components
import { MdAddCircleOutline } from 'react-icons/md';
import Modal from 'react-modal';
import RingLoader from 'react-spinners/RingLoader';
import Education from './Education';
import EducationForm from './form/EducationForm';

//import state
import { useGetEducationQuery } from '../../store/slices/resume/api-education';

const Educations = ({ resumeId }) => {
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
      <section className='section experiences'>
        <div className='headline'>
          <h1 className='title'>Education</h1>
          <div className='actions'>
            <MdAddCircleOutline
              className='action create'
              onClick={toggleModal}
            />
          </div>
        </div>
        <hr />
        <div className='educations'>
          {isLoading && (
            <RingLoader className='loader-page' loading={isLoading} size={50} />
          )}
          {isError && <h1>Error: {error}</h1>}
          {isSuccess &&
            eds.map((ed) => {
              return <Education key={ed._id} education={ed}></Education>;
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
