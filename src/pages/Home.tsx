import { useNavigate } from "react-router-dom";
import { authService } from "../shared/singletons"

export default function Home() {
  const navigate = useNavigate();

  const onLogoutClicked = async () => {
    await authService.logout();
    navigate('/login');
  }

  return (
    <>
      <div>Home</div>
      <button onClick={onLogoutClicked}>Logout</button>
    </>
  )
}
