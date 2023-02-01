const Language = (props) => {
  return (
    <div className={props.highlighted ? 'lang highlighted-lang' : 'lang'}>
      {props.icon}
      <div className='details'>
        <h4 className='details-name'>
          {props.title}
          <span className='details-years'>{props.years} years</span>
        </h4>
      </div>
    </div>
  );
};

export default Language;
