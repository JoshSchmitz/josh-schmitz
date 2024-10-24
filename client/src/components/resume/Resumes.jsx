import { useSelector } from 'react-redux';

// import components
import RingLoader from 'react-spinners/RingLoader';

// import state
import { useGetResumeQuery } from '../../store/slices/resume/api-resume';
import { Link } from 'react-router-dom';

const Resumes = () => {
  const { _id: userId } = useSelector((state) => state.auth.userInfo);
  const {
    data: resumes,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetResumeQuery({ userId });

  return (
    <article className='section' id='resumes'>
      <div className='headline'>
        <h1 className='title'>Resumes</h1>
      </div>
      <div className='resumes'>
        {isLoading && (
          <RingLoader className='loader-page' loading={isLoading} size={50} />
        )}
        {isError && <h1>Error: {error}</h1>}
        {isSuccess &&
          resumes.map((r) => {
            return (
              <Link key={r._id} to={`/resume/${r._id}`}>
                <section className='resume'>
                  <h3 className='name'>{r.title}</h3>
                  <p className='bio'>{r.bio}</p>
                  <div className='stats'>
                    <p>Experiences: {r.experienceCount}</p>
                    <p>Education: {r.educationCount}</p>
                    <p>Skills: {r.skillCount}</p>
                    <p>Leadership: {r.leadershipCount}</p>
                    <p>Projects: {r.projectCount}</p>
                    <p>Accomplishments: {r.accomplishmentCount}</p>
                    <p>Awards: {r.awardCount}</p>
                    <p>Groups: {r.groupCount}</p>
                    <p>Languages: {r.languageCount}</p>
                  </div>
                </section>
              </Link>
            );
          })}
      </div>
    </article>
  );
};
export default Resumes;
