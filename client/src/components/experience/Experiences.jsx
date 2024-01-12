import PropTypes from 'prop-types';
import { useState } from 'react';

//import components
import { MdAddCircleOutline } from 'react-icons/md';
import Modal from 'react-modal';
import RingLoader from 'react-spinners/RingLoader';
import Experience from './Experience';
import ExperienceForm from './ExperienceForm';

// import state
import { useGetExperienceQuery } from '../../store/slices/resume/api-experience';

const Experiences = ({ resumeId }) => {
  const {
    data: experiences,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetExperienceQuery({ resumeId });

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
        preventScroll={true}
        shouldFocusAfterRender={false}
      >
        <ExperienceForm edit={false} />
      </Modal>
      <section className='section experiences'>
        <div className='headline'>
          <h1 className='title'>Work Experiences</h1>
          <div className='actions'>
            <MdAddCircleOutline
              className='action create'
              onClick={toggleModal}
            />
          </div>
        </div>
        <hr />
        <div>
          {isLoading && (
            <RingLoader className='loader-page' loading={isLoading} size={50} />
          )}
          {isError && <h1>Error: {error}</h1>}
          {isSuccess &&
            experiences.map((exp) => {
              return <Experience key={exp._id} experience={exp} />;
            })}
        </div>
      </section>
    </>
  );
};
Experiences.propTypes = {
  resumeId: PropTypes.string.isRequired,
};
export default Experiences;
