import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import dayjs from 'dayjs';

// import state
import { useDeleteLanguageMutation } from '../../store/slices/resume/api-language';

// import components
import Modal from 'react-modal';
import Confirm from '../confirm/Confirm';
import LeadershipForm from './form/LanguageForm';

// import icons
import { MdEdit, MdDelete } from 'react-icons/md';
// import * as MdIcons from 'react-icons/md';

const Language = ({ language, resume }) => {
  // generate icon
  // let Icon = '';
  // Icon = MdIcons[`${language.icon}`];

  // modal functions
  const [confirmIsOpen, setConfirmIsOpen] = useState(false);
  const confirmModal = () => {
    setConfirmIsOpen(!confirmIsOpen);
  };
  const [formIsOpen, setFormIsOpen] = useState(false);
  const formModal = () => {
    setFormIsOpen(!formIsOpen);
  };

  // redux state
  const [deleteLanguage, { deleteIsLoading }] = useDeleteLanguageMutation();

  // delete leadership handler
  const handleDelete = () => {
    try {
      deleteLanguage({
        resumeId: resume,
        languageId: language._id,
      });
      toast.warning('Language deleted');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <>
      <Modal
        className='modal-content'
        overlayClassName='modal-overlay'
        contentLabel='Update Language Modal'
        isOpen={formIsOpen}
        onRequestClose={formModal}
        preventScroll={true}
        shouldFocusAfterRender={false}
      >
        <LeadershipForm
          resumeId={resume}
          leadershipId={language._id}
          edit={true}
          toggleModal={formModal}
        />
      </Modal>
      <Modal
        className='modal-content'
        overlayClassName='modal-overlay'
        contentLabel='Confirm Modal'
        isOpen={confirmIsOpen}
        onRequestClose={confirmModal}
        preventScroll={true}
        shouldFocusAfterRender={false}
      >
        <Confirm
          confirm={handleDelete}
          confirmLabel='Delete'
          loading={deleteIsLoading}
          close={confirmModal}
          closeLabel='Cancel'
          message='Are you sure you want to delete this language?'
        />
      </Modal>
      <div
        className={language.highlighted ? 'language highlighted' : 'language'}
        key={language._id}
      >
        <div className='icon'>{/* <Icon /> */}</div>
        <div className='details'>
          <h3 className='lang-title'>{language.title}</h3>
          <p className='description'>{language.description}</p>
          <p className='date'>
            {dayjs(language.date).add(1, 'day').format('MMMM D, YYYY')}
          </p>
        </div>
        <div className='actions'>
          <MdEdit className='action update' onClick={formModal} />
          <MdDelete className='action delete' onClick={confirmModal} />
        </div>
      </div>
    </>
  );
};
Language.propTypes = {
  language: PropTypes.object.isRequired,
  resume: PropTypes.string.isRequired,
};

export default Language;
