import { Navigate, useNavigate } from "react-router-dom";
import { authService } from "../shared/singletons";

export default function Auth() {
  const navigate = useNavigate();

  const onSignInClick = async () => {
    const signInResult = await authService.signInWithPopup();

    if(signInResult) {
      navigate('/');
    }
  };

  const isLoggedIn = authService.isUserLoggedIn();

  if(isLoggedIn) {
    return <Navigate to='/' />
  }

  return (
    <>
      <h1>Devprofile Page</h1>

      <button onClick={onSignInClick}>Sign In</button>
    </>
  );
}
