import { useState } from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

// import components
import { MdAddCircleOutline } from 'react-icons/md';
import RingLoader from 'react-spinners/RingLoader';
import Modal from 'react-modal';
import Award from './Award';
import AwardForm from './form/AwardForm';

// import state
import { useGetAwardQuery } from '../../store/slices/resume/api-award';

const Awards = ({ resumeId }) => {
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
          <div className='actions'>
            <MdAddCircleOutline
              className='action create'
              onClick={toggleModal}
            />
          </div>
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
                return <Award key={aw._id} resume={resumeId} award={aw} />;
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
