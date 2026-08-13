import { useContext } from "react";
import UserContext from "../context/UserContext";
import Login from "./Login";
import Profile from "./Profile";

const AuthGate = () => {
  const { user } = useContext(UserContext);
  return user ? <Profile /> : <Login />;
};

export default AuthGate;
