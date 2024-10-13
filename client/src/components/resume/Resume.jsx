import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

// import components
import AddSection from './AddSection';
import RingLoader from 'react-spinners/RingLoader';
import Experiences from '../experience/Experiences';
import Educations from '../education/Educations';
import Skills from '../skill/Skills';
import Leaderships from '../leadership/Leaderships';
import Projects from '../project/Projects';
import Accomplishments from '../accomplishment/Accomplishments';
import Awards from '../award/Awards';
import Groups from '../group/Groups';
import Languages from '../language/Languages';

// import state
import { useGetResumeQuery } from '../../store/slices/resume/api-resume';

const Resume = ({ resumeId }) => {
  const {
    data: resume,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetResumeQuery({ resumeId });
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      {isLoading && (
        <RingLoader className='loader-page' loading={isLoading} size={50} />
      )}
      {isError && <h1>Error: {error}</h1>}
      {isSuccess && (
        <article className='resume'>
          <section className='section' id='bio'>
            <h1 className='title'>{resume.title}</h1>
            <p className='bio'>{resume.bio}</p>
          </section>
          {userInfo && userInfo._id === resume.user && (
            <AddSection resumeId={resumeId} />
          )}
          {resume.experienceCount > 0 && <Experiences resumeId={resumeId} />}
          {resume.educationCount > 0 && <Educations resumeId={resumeId} />}
          {resume.skillCount > 0 && <Skills resumeId={resumeId} />}
          {resume.leadershipCount > 0 && <Leaderships resumeId={resumeId} />}
          {resume.projectCount > 0 && <Projects resumeId={resumeId} />}
          {resume.accomplishmentCount > 0 && (
            <Accomplishments resumeId={resumeId} />
          )}
          {resume.awardCount > 0 && <Awards resumeId={resumeId} />}
          {resume.groupCount > 0 && <Groups resumeId={resumeId} />}
          {resume.languageCount > 0 && <Languages resumeId={resumeId} />}
        </article>
      )}
    </>
  );
};
Resume.propTypes = {
  resumeId: PropTypes.string.isRequired,
};
export default Resume;
