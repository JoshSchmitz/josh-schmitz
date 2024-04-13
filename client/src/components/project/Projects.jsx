import { MdAddCircleOutline } from 'react-icons/md';

const Projects = () => {
  return (
    <>
      <section className='section projects'>
        <div className='headline'>
          <h1 className='title'>Projects</h1>
          <div className='actions'>
            <MdAddCircleOutline
              className='action create'
              //   onClick={toggleModal}
            />
          </div>
        </div>
        <hr />
        <div className='projects'></div>
      </section>
    </>
  );
};
export default Projects;
