import { MdAddCircleOutline } from 'react-icons/md';

const Awards = () => {
  return (
    <>
      <section className='section awards'>
        <div className='headline'>
          <h1 className='title'>Awards</h1>
          <div className='actions'>
            <MdAddCircleOutline
              className='action create'
              //   onClick={toggleModal}
            />
          </div>
        </div>
        <hr />
        <div className='awards'></div>
      </section>
    </>
  );
};
export default Awards;
