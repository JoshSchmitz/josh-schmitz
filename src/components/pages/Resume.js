import Experiences from '../experience/Experiences';
import Educations from '../education/Educations';
import Skills from '../skill/Skills';

const Resume = () => {
  return (
    <div className='page' id='resume'>
      <article className='businesscard'>
        <h1>Resume works!</h1>
      </article>
      <article>
        <Experiences></Experiences>
        <Educations></Educations>
        <Skills></Skills>
      </article>
    </div>
  );
};

export default Resume;
