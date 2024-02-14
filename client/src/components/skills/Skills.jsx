import PropTypes from 'prop-types';

// import components
import { MdAddCircleOutline } from 'react-icons/md';

const Skills = ({ resumeId }) => {
  return (
    <section className='section skills'>
      <div className='headline'>
        <h1 className='title'>Skills</h1>
        <div className='actions'>
          <MdAddCircleOutline
            className='action create' /* onClick={toggleModal} */
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
  );
};
Skills.propTypes = {
  resumeId: PropTypes.string.isRequired,
};

export default Skills;
