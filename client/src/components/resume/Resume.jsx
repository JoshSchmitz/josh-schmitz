import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux';
import { useGetResumeQuery } from '../../store/slices/resume/api-resume';

// import components
import RingLoader from 'react-spinners/RingLoader';
import Experiences from '../experience/Experiences';
import Educations from '../education/Educations';
import Skills from '../skill/Skills';
import Leaderships from '../leadership/Leaderships';
import Projects from '../project/Projects';
import Accomplishments from '../accomplishment/Accomplishments';
import Awards from '../award/Awards';
import Groups from '../group/Groups';

const Resume = ({ resumeId }) => {
  // const { userId } = useSelector((state) => state.auth.userInfo._id);
  const {
    data: resume,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetResumeQuery({ resumeId });

  return (
    <>
      {isLoading && (
        <RingLoader className='loader-page' loading={isLoading} size={50} />
      )}
      {isError && <h1>Error: {error}</h1>}
      {isSuccess && (
        <article className='resume'>
          <section className='section title'>
            <h1 className='title'>{resume.title}</h1>
            <p className='bio'>{resume.bio}</p>
          </section>
          <Experiences resumeId={resumeId} />
          <Educations resumeId={resumeId} />
          <Skills resumeId={resumeId} />
          <Leaderships resumeId={resumeId} />
          <Projects resumeId={resumeId} />
          <Accomplishments resumeId={resumeId} />
          <Awards resumeId={resumeId} />
          <Groups resumeId={resumeId} />
        </article>
      )}
    </>
  );
};
Resume.propTypes = {
  resumeId: PropTypes.string.isRequired,
};
export default Resume;
