import Language from './Language';
import { useSelector } from 'react-redux';

const Languages = () => {
  const { languages } = useSelector((store) => store.languages);
  return (
    <section className='section languages'>
      <h1 className='title'>Languages</h1>
      <hr />
      <div className='languages-container'>
        {languages.map((lang) => {
          return (
            <Language
              key={lang.id}
              title={lang.title}
              icon={lang.icon}
              years={lang.years}
              highlighted={lang.highlighted}
            ></Language>
          );
        })}
      </div>
    </section>
  );
};

export default Languages;
