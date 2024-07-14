import { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

// import components
import { MdAddCircleOutline } from 'react-icons/md';
import RingLoader from 'react-spinners/RingLoader';
import Modal from 'react-modal';
import Project from './Project';
import ProjectForm from './form/ProjectForm';

// import state
import { useGetProjectQuery } from '../../store/slices/resume/api-project';

const Projects = ({ resumeId }) => {
  // state
  const {
    data: projects,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProjectQuery({ resumeId });

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
        <ProjectForm
          resumeId={resumeId}
          edit={false}
          toggleModal={toggleModal}
        />
      </Modal>
      <section className='section' id='projects'>
        <div className='headline'>
          <h1 className='title'>Projects</h1>
          <div className='actions'>
            <MdAddCircleOutline
              className='action create'
              onClick={toggleModal}
            />
          </div>
        </div>
        <hr />
        <div className='projects'>
          {isLoading && (
            <RingLoader className='loader-page' loading={isLoading} size={50} />
          )}
          {isError && <h1>Error: {error}</h1>}
          {isSuccess &&
            projects
              .filter((proj) => proj.title)
              .sort((a, b) => dayjs(b.date) - dayjs(a.date))
              .map((proj) => {
                return (
                  <Project key={proj._id} resume={resumeId} leadership={proj} />
                );
              })}
        </div>
      </section>
    </>
  );
};
Projects.propTypes = {
  resumeId: PropTypes.string.isRequired,
};
export default Projects;
