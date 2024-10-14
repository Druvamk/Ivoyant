import { useSelector } from "react-redux";
import { RootState } from "../../store";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

function BalanceDisplay() {
  const data = useSelector((store: RootState) => store.account);
  console.log(data);
  return <div className="balance">{formatCurrency(data.balance)}</div>;
}

export default BalanceDisplay;
