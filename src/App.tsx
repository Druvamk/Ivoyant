import CreateCustomer from "./components/customer/CreateCustomer";
import Customer from "./components/customer/Customer";
import AccountOperations from "./components/acounts/AccountOperations";
import BalanceDisplay from "./components/acounts/BalanceDisplay";
import "./store";
import { useSelector } from "react-redux";
import { RootState } from "./store";
function App() {
  const { fullName } = useSelector((store: RootState) => store.customer);
  console.log(fullName);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      {fullName && (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
