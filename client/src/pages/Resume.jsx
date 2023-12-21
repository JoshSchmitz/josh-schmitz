import { useSelector } from 'react-redux';

const Resume = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <main>
      <div className='container'>
        {userInfo ? (
          <h1>Logged in - can create resume</h1>
        ) : (
          <h1>Logged out - view resume only</h1>
        )}
      </div>
    </main>
  );
};
export default Resume;
