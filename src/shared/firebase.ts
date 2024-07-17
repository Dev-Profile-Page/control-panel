import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCpZdnVXx2uyI1hke08h4RwnXl_T-y8gug",
    authDomain: "dev-profile-page-dev.firebaseapp.com",
    projectId: "dev-profile-page-dev",
    storageBucket: "dev-profile-page-dev.appspot.com",
    messagingSenderId: "828992599820",
    appId: "1:828992599820:web:9b203e24bae2b84536fb29"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GithubAuthProvider();
provider.addScope('read:user');

export {
    auth,
    provider,
}