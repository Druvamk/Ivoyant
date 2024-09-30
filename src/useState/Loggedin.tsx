import { useState } from "react";
type LoggedinProps = {
  name: string;
  email: string;
};
function Loggedin() {
  const [Loggedin, setLoggedin] = useState<LoggedinProps>({} as LoggedinProps);
  function handleLogin() {
    setLoggedin({
      name: "Druva M K",
      email: "druvamk1@gmail.com",
    });
  }
  function handleLogout() {
    setLoggedin({} as LoggedinProps);
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>
        <h2>Name: {Loggedin?.name}</h2>
        <h3>Email: {Loggedin?.email}</h3>
      </div>
    </div>
  );
}

export default Loggedin;
