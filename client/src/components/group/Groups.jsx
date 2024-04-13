import { MdAddCircleOutline } from 'react-icons/md';

const Groups = () => {
  return (
    <>
      <section className='section' id='groups'>
        <div className='headline'>
          <h1 className='title'>Groups</h1>
          <div className='actions'>
            <MdAddCircleOutline
              className='action create'
              //   onClick={toggleModal}
            />
          </div>
        </div>
        <hr />
        <div className='groups'></div>
      </section>
    </>
  );
};
export default Groups;
