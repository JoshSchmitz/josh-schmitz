import PropTypes from 'prop-types';
import { useState } from 'react';

//import components
import { MdAddCircleOutline } from 'react-icons/md';
import Modal from 'react-modal';
import RingLoader from 'react-spinners/RingLoader';
import PulseLoader from 'react-spinners/PulseLoader';
import Experience from './Experience';

// import state
import {
  useGetExperienceQuery,
  useCreateExperienceMutation,
} from '../../store/slices/resume/api-experience';

const Experiences = ({ resumeId }) => {
  const {
    data: experiences,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetExperienceQuery({ resumeId });

  // modal functions
  const [modalIsOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!modalIsOpen);
  };

  const [createExperience, { createIsLoading }] = useCreateExperienceMutation();
  const createHandler = async () => {};

  const [position, setPosition] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [highlighted, setHighlighted] = useState(false);
  const [companyName, setCompanyName] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [postcode, setPostcode] = useState('');

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
        <form className='form' id='experience' /* onSubmit={submitHandler} */>
          <div className='form-header'>
            <div className='title-bar'>
              <h1 className='title'>Add Experience</h1>
            </div>
            <h4 className='subtitle'>Add work experience to your resume</h4>
          </div>
          <div className='form-content'>
            <div className='form-section'>
              <div className='form-group'>
                <input
                  id='position'
                  className='input'
                  type='text'
                  placeholder='Position title'
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                />
                <textarea
                  id='description'
                  cols='30'
                  rows='10'
                  placeholder='Description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <label htmlFor='startdate'>Start Date</label>
              <div className='form-group'>
                <input
                  id='startdate'
                  className='input'
                  type='date'
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>
              <label htmlFor='enddate'>End Date</label>
              <div className='form-group'>
                <input
                  id='enddate'
                  className='input'
                  type='date'
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>
              <div className='form-group'>
                <div className='checkbox'>
                  <input
                    id='highlighted'
                    className='input checkbox'
                    type='checkbox'
                    value={highlighted}
                    onChange={(e) => setHighlighted(e.target.value)}
                  />
                  <label htmlFor='highlighted'>Highlighted?</label>
                </div>
              </div>
            </div>
            <div className='form-section'>
              <div className='form-group'>
                <input
                  id='companyname'
                  className='input'
                  type='text'
                  placeholder='Company name'
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
                <input
                  id='companyphone'
                  className='input'
                  type='tel'
                  placeholder='Phone'
                  value={companyPhone}
                  onChange={(e) => setCompanyPhone(e.target.value)}
                />
                <input
                  id='address'
                  className='input'
                  type='text'
                  placeholder='Address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  id='city'
                  className='input'
                  type='text'
                  placeholder='City'
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
                <input
                  id='state'
                  className='input'
                  type='text'
                  placeholder='State'
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                />
                <input
                  id='postcode'
                  className='input'
                  type='text'
                  placeholder='Post code'
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                />
              </div>
            </div>
          </div>
          <button className='button' type='submit'>
            {isLoading ? (
              <PulseLoader
                className='loader-button'
                loading={isLoading}
                size={10}
                color='#f4f4f4'
              />
            ) : (
              'Add Experience'
            )}
          </button>
        </form>
        {/* <div className='form-extra'>
          Need an account?{' '}
          <a className='link' onClick={registerClick}>Register</a>
        </div> */}
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
          {(isLoading || createIsLoading) && (
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
