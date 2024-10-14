import { useSelector } from "react-redux";
import { RootState } from "../../store";

function Customer() {
  const { fullName } = useSelector((store: RootState) => store.customer);
  return <h2>👋 Welcome, {fullName ? fullName : "Guest"}</h2>;
}

export default Customer;
