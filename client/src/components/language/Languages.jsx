import { MdAddCircleOutline } from 'react-icons/md';

const Languages = () => {
  return (
    <>
      <section className='section' id='languages'>
        <div className='headline'>
          <h1 className='title'>Languages</h1>
          <div className='actions'>
            <MdAddCircleOutline
              className='action create'
              //   onClick={toggleModal}
            />
          </div>
        </div>
        <hr />
        <div className='languages'></div>
      </section>
    </>
  );
};
export default Languages;
