import { useState } from 'react';
import PropTypes from 'prop-types';

// import components
import { MdAddCircleOutline } from 'react-icons/md';
import RingLoader from 'react-spinners/RingLoader';
import Modal from 'react-modal';
import Language from './Language';
import LanguageForm from './form/LanguageForm';

// import state
import { useGetLanguageQuery } from '../../store/slices/resume/api-language';

const Languages = ({ resumeId }) => {
  // state
  const {
    data: languages,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLanguageQuery({ resumeId });

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
        contentLabel='Create Language Modal'
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        preventScroll={false}
        shouldFocusAfterRender={false}
      >
        <LanguageForm
          resumeId={resumeId}
          edit={false}
          toggleModal={toggleModal}
        />
      </Modal>
      <section className='section' id='languages'>
        <div className='headline'>
          <h1 className='title'>Languages</h1>
          <div className='actions'>
            <MdAddCircleOutline
              className='action create'
              onClick={toggleModal}
            />
          </div>
        </div>
        <hr />
        <div className='languages'>
          {isLoading && (
            <RingLoader className='loader-page' loading={isLoading} size={50} />
          )}
          {isError && <h1>Error: {error}</h1>}
          {isSuccess &&
            languages
              .filter((lang) => lang.name)
              // .sort((a, b) => dayjs(b.date) - dayjs(a.date))
              .map((lang) => {
                return (
                  <Language key={lang._id} resume={resumeId} language={lang} />
                );
              })}
        </div>
      </section>
    </>
  );
};
Languages.propTypes = {
  resumeId: PropTypes.string.isRequired,
};
export default Languages;
