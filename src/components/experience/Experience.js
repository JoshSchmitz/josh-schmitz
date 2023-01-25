// import { MdDelete, MdEdit } from 'react-icons/md';

const Experience = (props) => {
  return (
    <div
      className={props.highlighted ? 'experience highlighted' : 'experience'}
    >
      <div className='headline'>
        <h2 className='position'>{props.position}</h2>
        <div className='actions'>
          {/* <MdEdit className='action'></MdEdit>
          <MdDelete className='action' onClick={props.delete}></MdDelete> */}
        </div>
      </div>
      <div className='details'>
        <h3 className='company'>{props.company} -</h3>
        <h3 className='location'>
          {props.location.city}, {props.location.state}
        </h3>
        <div className='break'></div>
        <h4 className='time'>
          {props.startdate} to {props.enddate}
        </h4>
      </div>
      <p className='description'>{props.description}</p>
    </div>
  );
};

export default Experience;
