import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

//import components
import { MdAddCircleOutline } from 'react-icons/md';
import Modal from 'react-modal';
import RingLoader from 'react-spinners/RingLoader';
import Experience from './Experience';
import ExperienceForm from './form/ExperienceForm';

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
  const [xp, setXp] = useState([]);

  // modal functions
  Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    async function experienceSort() {
      let exp = await experiences;
      if (exp) {
        const x = exp
          .map((exp) => {
            const startDate =
              exp.startDate !== '' ? new Date(exp.startDate) : '';
            const endDate = exp.endDate !== '' ? new Date(exp.endDate) : '';
            return { ...exp, startDate, endDate };
          })
          .sort((a, b) => b.startDate - a.startDate);
        setXp(x);
      }
    }
    experienceSort();
  });

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
        <ExperienceForm
          resumeId={resumeId}
          edit={false}
          toggleModal={toggleModal}
        />
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
            xp.map((exp) => {
              return (
                <Experience key={exp._id} resume={resumeId} experience={exp} />
              );
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
