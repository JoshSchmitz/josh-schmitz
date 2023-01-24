import Experiences from '../experience/Experiences';

const Resume = () => {
  return (
    <div className='page' id='resume'>
      <article className='businesscard'>
        <h1>Resume works!</h1>
      </article>
      <article>
        <Experiences></Experiences>
      </article>
    </div>
  );
};

export default Resume;
