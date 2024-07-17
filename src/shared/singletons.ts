import { AuthService } from "../services/auth.service";
import { auth, provider } from './firebase';

const authService = new AuthService(auth, provider);

export {
  authService,
}