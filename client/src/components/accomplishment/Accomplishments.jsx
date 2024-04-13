import { MdAddCircleOutline } from 'react-icons/md';

const Accomplishments = () => {
  return (
    <>
      <section className='section accomplishments'>
        <div className='headline'>
          <h1 className='title'>Accomplishments</h1>
          <div className='actions'>
            <MdAddCircleOutline
              className='action create'
              //   onClick={toggleModal}
            />
          </div>
        </div>
        <hr />
        <div className='accomplishments'></div>
      </section>
    </>
  );
};
export default Accomplishments;
