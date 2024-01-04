import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  // We are informing typescript that type of user can be null or AuthUser

  const handleLogin = () => {
    setUser({
      name: "shweta",
      email: "shweta@example.com",
    });
  };
  const handleLogout = () => {};

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      {user === null ? (
        " User is not present"
      ) : (
        <div>
          <div>User name is {user?.name}</div>
          <div>User email is {user?.email} </div>
        </div>
      )}
    </div>
  );
};

export default User;
