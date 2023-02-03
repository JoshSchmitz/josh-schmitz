import { useSelector } from 'react-redux';

const Awards = () => {
  const { awards } = useSelector((store) => store.awards);

  return (
    <section className='section awards'>
      <h1 className='title'>Awards</h1>
      <hr />
      <div className='awards-container'>
        {awards.map((award) => {
          return award.title;
        })}
      </div>
    </section>
  );
};

export default Awards;
