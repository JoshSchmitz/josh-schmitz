import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
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
  const [experience, setExperience] = useState([]);
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

  // generate experience
  useEffect(() => {
    const xp = [];
    for (let i = 0; i < 6; i++) {
      if (i < language.experience) {
        xp.push('filled');
      } else {
        xp.push('empty');
      }
    }
    setExperience(xp);
  }, [language]);

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
          languageId={language._id}
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
        <div className='details'>
          <div className='info'>
            <h3 className='name'>{language.name}</h3>
            <div className='separator'></div>
            <p className='years'>
              {dayjs
                .duration(dayjs(language.startDate).diff(dayjs()))
                .humanize()}
            </p>
          </div>
          <p className='dialect'>{language.dialect}</p>
          <div className='exp'>
            {experience.map((item, i) => {
              if (item === 'filled') {
                return <div key={i} className='xp filled'></div>;
              } else {
                return <div key={i} className='xp'></div>;
              }
            })}
          </div>
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
