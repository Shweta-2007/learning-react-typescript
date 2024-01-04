import { useContext } from "react";
import { UserContext } from "./UserContext";

const User2 = () => {
  const userContext = useContext(UserContext);
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  const handleLogin = () => {
    if (userContext?.setUser) {
      userContext.setUser({
        name: "shweta",
        email: "shweta@example.com",
      });
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext?.user?.name}</div>
      <div>User email is {userContext?.user?.email}</div>
    </div>
  );
};

export default User2;
