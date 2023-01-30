import {
  MdAddTask,
  /** MdEdit, MdDelete */
} from 'react-icons/md';

const Skill = (props) => {
  const xp = [];
  for (let i = 0; i < 10; i++) {
    if (i < props.experience) {
      xp.push('filled');
    } else {
      xp.push('empty');
    }
  }

  return (
    <div className={props.highlighted ? 'skill highlighted-skill' : 'skill'}>
      <MdAddTask className='icon'></MdAddTask>
      <div className='details'>
        <h4 className='details-name'>
          {props.title}
          <span className='details-years'>{props.years} years</span>
        </h4>
        <div className='break'></div>
        <div className='details-exp'>
          {xp.map((item, i) => {
            if (item === 'filled') {
              return <div key={i} className='xp filled'></div>;
            } else {
              return <div key={i} className='xp'></div>;
            }
          })}
        </div>
      </div>
      {/* <div className='actions'>
        <MdEdit className='action'></MdEdit>
        <MdDelete className='action'></MdDelete>
      </div> */}
    </div>
  );
};

export default Skill;
