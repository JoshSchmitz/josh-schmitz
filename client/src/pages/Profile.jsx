import { useSelector } from 'react-redux';

//import components
import ProfileForm from '../components/authenticate/pages/Profile';
import Resumes from '../components/resume/Resumes';

const Profile = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <main>
        {userInfo ? (
          <div className='container profile'>
            <div className='edit'>
              <ProfileForm />
            </div>
            <Resumes />
          </div>
        ) : (
          <div className='container'>
            <div className='error'>
              <h1>You are not authorized to view this page!</h1>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
export default Profile;
