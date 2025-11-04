import { useDispatch } from "react-redux";
import { setIsLogged } from "../../../app/features/portalSlice.js";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onLogin = () => {
    dispatch(setIsLogged(true));
    navigate("/");
  }

  return (
    <div>
      <div>Login</div>

      <div><button onClick={onLogin}>Continue</button></div>
    </div>
  )
}

export default Login