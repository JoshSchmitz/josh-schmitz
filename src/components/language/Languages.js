import { useSelector } from 'react-redux';

const Languages = () => {
  const { languages } = useSelector((store) => store.languages);
  return (
    <section className='section languages'>
      <h1 className='title'>Languages</h1>
      <hr />
      {languages.map((lang) => lang.icon)}
    </section>
  );
};

export default Languages;
