import PropTypes from 'prop-types';
import { useGetResumeQuery } from '../../store/slices/resume/api-resume';

// import components
import RingLoader from 'react-spinners/RingLoader';

const Resume = ({ id }) => {
  const {
    data: resume,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetResumeQuery(id);

  return (
    <>
      {isLoading && (
        <RingLoader className='loader-page' loading={isLoading} size={50} />
      )}
      {isError && <h1>Error: {error}</h1>}
      {isSuccess && (
        <article className='resume'>
          <h1 className='title'>{resume.title}</h1>
          <p className='bio'>{resume.bio}</p>
        </article>
      )}
    </>
  );
};
Resume.propTypes = {
  id: PropTypes.string.isRequired,
};
export default Resume;
