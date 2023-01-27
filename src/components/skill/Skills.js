import { useSelector } from 'react-redux';
import Skill from './Skill';

const Skills = () => {
  const { skills } = useSelector((store) => store.skills);
  return (
    <section className='section skills'>
      <h1 className='title'>Skills</h1>
      <hr />
      <div className='skills-container'>
        {skills.map((skill) => {
          return (
            <Skill
              key={skill.id}
              title={skill.title}
              experience={skill.experience}
              years={skill.years}
              highlighted={skill.highlighted}
            ></Skill>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
