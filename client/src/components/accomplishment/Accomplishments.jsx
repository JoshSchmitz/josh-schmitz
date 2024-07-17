import { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

// import components
import { MdAddCircleOutline } from 'react-icons/md';
import RingLoader from 'react-spinners/RingLoader';
import Modal from 'react-modal';
import Accomplishment from './Accomplishment';
import AccomplishmentForm from './form/AccomplishmentForm';

// import state
import { useGetAccomplishmentQuery } from '../../store/slices/resume/api-accomplishment';

const Accomplishments = ({ resumeId }) => {
  // state
  const {
    data: accomplishments,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAccomplishmentQuery({ resumeId });

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
        contentLabel='Create Accomplishment Modal'
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        preventScroll={false}
        shouldFocusAfterRender={false}
      >
        <AccomplishmentForm
          resumeId={resumeId}
          edit={false}
          toggleModal={toggleModal}
        />
      </Modal>
      <section className='section' id='accomplishments'>
        <div className='headline'>
          <h1 className='title'>Accomplishments</h1>
          <div className='actions'>
            <MdAddCircleOutline
              className='action create'
              onClick={toggleModal}
            />
          </div>
        </div>
        <hr />
        <div className='accomplishments'>
          {isLoading && (
            <RingLoader className='loader-page' loading={isLoading} size={50} />
          )}
          {isError && <h1>Error: {error}</h1>}
          {isSuccess &&
            accomplishments
              .filter((acc) => acc.title)
              .sort((a, b) => dayjs(b.date) - dayjs(a.date))
              .map((acc) => {
                return (
                  <Accomplishment
                    key={acc._id}
                    resume={resumeId}
                    accomplishment={acc}
                  />
                );
              })}
        </div>
      </section>
    </>
  );
};
Accomplishments.propTypes = {
  resumeId: PropTypes.string.isRequired,
};
export default Accomplishments;
