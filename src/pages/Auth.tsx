import { signInWithPopup, GithubAuthProvider, getAdditionalUserInfo } from 'firebase/auth';
import { auth, provider } from '../shared/firebase';

export default function Auth() {

  const onSignInClick = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GithubAuthProvider.credentialFromResult(result);

        if (credential) {
          const token = credential.accessToken;

          const user = result.user;
          const additionalInfo = getAdditionalUserInfo(result);

          console.log(token);
          console.log(user);
          console.log(additionalInfo);
        }
      })
  };

  return (
    <>
      <h1>Devprofile Page</h1>

      <button onClick={onSignInClick}>Sign In</button>
    </>
  );
}
