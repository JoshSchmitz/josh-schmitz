//import components
import Resume from '../components/resume/Resume';

const ResumePage = () => {
  const resume = '65864617817602455608e0a7';

  return (
    <main>
      <div className='container'>
        <Resume id={resume} />
      </div>
    </main>
  );
};
export default ResumePage;
