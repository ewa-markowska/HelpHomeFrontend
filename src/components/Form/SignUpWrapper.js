import { useSelector } from 'react-redux';
import SignUp from './SignUp';

const SignUpWrapper = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  if (isLoggedIn) {

    return <div className="info-alert">You are already logged in.</div>
  }

  return <SignUp />;
};

export default SignUpWrapper;