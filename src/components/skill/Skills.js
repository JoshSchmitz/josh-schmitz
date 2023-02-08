import { useSelector } from 'react-redux';
import Skill from './Skill';

const Skills = (props) => {
  const { skills } = useSelector((store) => store.skills);
  return (
    <section className='section skills'>
      <h1 className='title'>{props.category}s</h1>
      <hr />
      <div className='skills-container'>
        {skills.map((skill) => {
          if (skill.category === props.category) {
            return (
              <Skill
                key={skill.id}
                title={skill.title}
                experience={skill.experience}
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

export default Skills;
