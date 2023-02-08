const Project = (props) => {
  return (
    <div className={props.highlighted ? 'project highlighted' : 'project'}>
      <h3 className='project-title'>{props.title}</h3>
      <h4 className='project-date'>
        {props.start} to {props.end}
      </h4>
      <p className='project-desc'>{props.description}</p>
      {/* 
        IDEA: add files to projects
        -- display images if file is image
        -- link to file if not image
      */}
    </div>
  );
};

export default Project;
