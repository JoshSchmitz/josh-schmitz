import { nanoid } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';

// import components
import { MdEdit, MdDelete } from 'react-icons/md';

const Education = ({ education }) => {
  return (
    <div className='education' key={education._id}>
      <div className='headline'>
        <div className='details'>
          <h3 className='degree'>{education.degree}</h3>
          <div className='separator' />
          <h4 className='gpa'>{education.gpa} GPA</h4>
          <div className='separator' />
          <div className='dates'>
            <h4 className='startdate'>
              {education.startDate !== ''
                ? dayjs(education.startDate)
                    .add(1, 'day')
                    .format('MMMM D, YYYY')
                : 'Now'}{' '}
              to{' '}
              {education.endDate !== ''
                ? dayjs(education.endDate).add(1, 'day').format('MMMM D, YYYY')
                : 'Now'}
            </h4>
          </div>
        </div>
        <div className='actions'>
          <MdEdit className='action update' /* onClick={formModal} */ />
          <MdDelete className='action delete' /* onClick={confirmModal} */ />
        </div>
      </div>
      <div className='specializations'>
        <div className='majors'>
          <p>{education.majorCount > 1 ? 'Majors:' : 'Major:'}</p>
          {education.majors.map((m, i, majors) => {
            return (
              <div className='major' key={nanoid()}>
                <p className='name'>{m.title}</p>
                {i < majors.length - 1 && <div className='separator' />}
              </div>
            );
          })}
        </div>
        <div className='minors'>
          <p>{education.minorCount > 1 ? 'Minors:' : 'Minor:'}</p>
          {education.minors.map((m, i, minors) => {
            return (
              <div className='minor' key={nanoid()}>
                <p className='name'>{m.title}</p>
                {i < minors.length - 1 && <div className='separator' />}
              </div>
            );
          })}
        </div>
      </div>
      <div className='institution'>
        <p className='institution-name'>{education.institution.name}</p>
        <div className='separator' />
        <p className='institution-location'>
          {education.institution.location.city},{' '}
          {education.institution.location.state}
        </p>
      </div>
    </div>
  );
};
Education.propTypes = {
  education: PropTypes.object.isRequired,
};
export default Education;
