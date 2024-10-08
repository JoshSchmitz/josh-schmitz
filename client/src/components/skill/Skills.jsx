import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';

// import components
import Icon from '../icon/Icon';
import RingLoader from 'react-spinners/RingLoader';
import Modal from 'react-modal';
import SkillForm from './form/SkillForm';
import Skill from './Skill';

// import state
import { useGetSkillQuery } from '../../store/slices/resume/api-skill';
import { useGetResumeQuery } from '../../store/slices/resume/api-resume';

const Skills = ({ resumeId }) => {
  // current user id and resume user id
  const { userInfo } = useSelector((state) => state.auth);
  const {
    data: { user },
  } = useGetResumeQuery({ resumeId });

  const {
    data: skills,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSkillQuery({ resumeId });
  const [categories, setCategories] = useState([]);

  // modal functions
  Modal.setAppElement('#root');
  const [modalIsOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  useEffect(() => {
    async function categories() {
      if (skills) {
        const cat = [];
        skills.forEach((sk) => {
          if (!cat.find((c) => c === sk.category)) {
            cat.push(sk.category);
          }
        });
        setCategories(cat);
      }
    }
    categories();
  }, [skills]);

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
      <section className='section' id='skills'>
        <div className='headline'>
          <h1 className='title'>Skills</h1>
          {userInfo && userInfo._id === user && (
            <div className='actions'>
              <Icon
                icon='MdAddCircleOutline'
                className='action create'
                onClick={toggleModal}
              />
            </div>
          )}
        </div>
        <hr />
        <div className='categories'>
          {isLoading && (
            <RingLoader className='loader-page' loading={isLoading} size={50} />
          )}
          {isError && <h1>Error: {error}</h1>}
          {isSuccess &&
            categories.sort().map((cat) => {
              return (
                <div key={nanoid()} className='category'>
                  <h3>{cat}s</h3>
                  <div className='skills'>
                    {skills
                      .filter((skill) => skill.category === cat)
                      .sort((a, b) => b.experience - a.experience)
                      .map((skill) => {
                        return (
                          skill.category === cat && (
                            <Skill
                              key={skill._id}
                              skill={skill}
                              resume={resumeId}
                              user={user}
                            />
                          )
                        );
                      })}
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
};
Skills.propTypes = {
  resumeId: PropTypes.string.isRequired,
};

export default Skills;
