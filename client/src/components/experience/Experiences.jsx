import PropTypes from 'prop-types';

//import components
import RingLoader from 'react-spinners/RingLoader';
import Experience from './Experience';

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

  return (
    <section className='section experiences'>
      <h1 className='title'>Work Experiences</h1>
      <hr />
      <div>
        {isLoading && (
          <RingLoader className='loader-page' loading={isLoading} size={50} />
        )}
        {isError && <h1>Error: {error}</h1>}
        {isSuccess &&
          experiences.map((exp) => {
            return <Experience key={exp._id} experience={exp} />;
          })}
      </div>
    </section>
  );
};
Experiences.propTypes = {
  resumeId: PropTypes.string.isRequired,
};
export default Experiences;
