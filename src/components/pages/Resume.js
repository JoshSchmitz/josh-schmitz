import Experiences from '../experience/Experiences';
import Educations from '../education/Educations';

const Resume = () => {
  return (
    <div className='page' id='resume'>
      <article className='businesscard'>
        <h1>Resume works!</h1>
      </article>
      <article>
        <Experiences></Experiences>
        <Educations></Educations>
      </article>
    </div>
  );
};

export default Resume;
