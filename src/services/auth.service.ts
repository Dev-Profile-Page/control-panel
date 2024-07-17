import { Auth, getAdditionalUserInfo, GithubAuthProvider, signInWithPopup, User } from "firebase/auth";

type SignInWithPopupSuccessReturnType = {
  token?: string;
  user: User;
  additionalInfo: any;
};

type SignInWithPopupReturnType = SignInWithPopupSuccessReturnType | false;

export class AuthService {
  private auth: Auth;
  private provider: GithubAuthProvider;

  public token?: string;
  public user?: User;
  public additionalInfo: any;

  constructor(auth: Auth, provider: GithubAuthProvider) {
    this.auth = auth;
    this.provider = provider;

    this.loadUserFromLocalStorage();
  }

  private loadUserFromLocalStorage() {
    const storedUser = localStorage.getItem('user');

    if(storedUser) {
      try {
        this.user = JSON.parse(storedUser);
      } catch(err) {
        this.user = undefined;
      }
    }
  }

  async signInWithPopup(): Promise<SignInWithPopupReturnType> {
    return signInWithPopup(this.auth, this.provider)
      .then(result => {
        const credential = GithubAuthProvider.credentialFromResult(result);

        if (credential) {
          const token = credential.accessToken;

          const user = result.user;
          const additionalInfo = getAdditionalUserInfo(result);

          this.token = token;
          this.user = user;
          this.additionalInfo = additionalInfo;

          if(user) {
            localStorage.setItem("user", JSON.stringify(user));
          }

          return {
            token,
            user,
            additionalInfo
          };
        }

        return false;
      })
  }

  isUserLoggedIn(): boolean {
    return this.user !== undefined;
  }

  async logout() {
    await this.auth.signOut();

    this.user = undefined;
    this.token = undefined;
    this.additionalInfo = undefined;

    localStorage.removeItem('user');
  }
}
