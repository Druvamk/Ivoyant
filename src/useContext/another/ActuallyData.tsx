import { useContext, useState } from "react";
import { UserContextProvider } from "./UserContext";

export default function ActuallyData() {
  const data = useContext(UserContextProvider);
  const [show, setShow] = useState<boolean>(false);
  function handleLogin() {
    setShow(true);
    data?.setUser({
      name: "Druva",
      email: "druvamk@gmail.com",
    });
  }
  function handleLogout() {
    setShow(false);
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      {show
        ? `UserName:${data.user?.name} Email: ${data.user?.email}`
        : "Logged out"}

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
