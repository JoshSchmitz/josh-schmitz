import Experiences from '../experience/Experiences';
import Educations from '../education/Educations';
import Skills from '../skill/Skills';
import Languages from '../skill/Languages';
import Leaderships from '../leadership/Leaderships';
import Accomplishments from '../accomplishment/Accomplishments';

const Resume = () => {
  return (
    <div className='page' id='resume'>
      <article className='businesscard'>
        <h1>Resume works!</h1>
      </article>
      <article>
        <Experiences></Experiences>
        <Educations></Educations>
        <Languages></Languages>
        <Skills></Skills>
        <Leaderships></Leaderships>
        <Accomplishments></Accomplishments>
      </article>
    </div>
  );
};

export default Resume;
