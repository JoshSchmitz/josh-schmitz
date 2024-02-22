import { useState } from 'react';
import PropTypes from 'prop-types';

// import components
import { MdAddCircleOutline } from 'react-icons/md';
import Modal from 'react-modal';
import SkillForm from './form/SkillForm';

const Skills = ({ resumeId }) => {
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
        <SkillForm resumeId={resumeId} edit={false} toggleModal={toggleModal} />
      </Modal>
      <section className='section skills'>
        <div className='headline'>
          <h1 className='title'>Skills</h1>
          <div className='actions'>
            <MdAddCircleOutline
              className='action create'
              onClick={toggleModal}
            />
          </div>
        </div>
        <hr />
        <div className='skills'>
          {/* {isLoading && (
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
              ></Education>
            );
          })} */}
        </div>
      </section>
    </>
  );
};
Skills.propTypes = {
  resumeId: PropTypes.string.isRequired,
};

export default Skills;
