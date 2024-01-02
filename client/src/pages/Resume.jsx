//import components
import Resume from '../components/resume/Resume';

const ResumePage = () => {
  const resume = '658782a85238abdb1f4f1500';

  return (
    <main>
      <div className='container'>
        <Resume resumeId={resume} />
      </div>
    </main>
  );
};
export default ResumePage;
