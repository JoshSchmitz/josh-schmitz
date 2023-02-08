import Skill from './Skill';
import { useSelector } from 'react-redux';

const Languages = () => {
  const { skills } = useSelector((store) => store.skills);
  return (
    <section className='section skills'>
      <h1 className='title'>Languages</h1>
      <hr />
      <div className='skills-container'>
        {skills.map((skill) => {
          if (skill.category === 'language') {
            return (
              <Skill
                key={skill.id}
                title={skill.title}
                years={skill.years}
                icon={skill.icon}
                highlighted={skill.highlighted}
              ></Skill>
            );
          } else {
            return null;
          }
        })}
      </div>
    </section>
  );
};

export default Languages;
