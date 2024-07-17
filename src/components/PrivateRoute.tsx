import { Navigate, Outlet } from "react-router-dom";
import { authService } from "../shared/singletons";

export default function PrivateRoute() {
  const isAuthenticated = authService.isUserLoggedIn();

  return (
    isAuthenticated ? <Outlet />: <Navigate to='/login'/>
  );
}
