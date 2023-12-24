import PropTypes from 'prop-types';

const Experiences = (experiences) => {
  return (
    <section className='section experiences'>
      <h1 className='title'>Experiences</h1>
      <hr />
      <p>{!experiences.data ? 'No Experiences' : 'Some Experiences'}</p>
      <p>{JSON.stringify(experiences)}</p>
    </section>
  );
};
Experiences.propTypes = {
  experiences: PropTypes.array.isRequired,
};
export default Experiences;
