import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposite, payload, requestLoan, withdraw } from "./accountSlice";
import { RootState } from "../../store";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState<number | string>("");
  const [withdrawalAmount, setWithdrawalAmount] = useState<number | string>("");
  const [loanAmount, setLoanAmount] = useState<number | string>("");
  const [loanPurpose, setLoanPurpose] = useState<string>("");
  const [currency, setCurrency] = useState<"USD" | "EUR" | "GBP">("USD");
  const dispatch = useDispatch();
  const data = useSelector((store: RootState) => store.account);
  function handleDeposit() {
    dispatch(deposite(depositAmount));
    setDepositAmount("");
  }

  function handleWithdrawal() {
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    dispatch(requestLoan({ loan: loanAmount, loanPurpose }));
    setLoanAmount("");
    setLoanPurpose("");
  }

  function handlePayLoan() {
    // Logic for handling loan repayment
    dispatch(payload());
    setLoanAmount("");
  }

  return (
    <div>
      <h2>Your account operations</h2>
      <div className="inputs">
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(Number(e.target.value))}
            placeholder="Enter ammount"
          />
          <select
            value={currency}
            onChange={(e) =>
              setCurrency(e.target.value as "USD" | "EUR" | "GBP")
            }
            title="currency"
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>
          <button onClick={handleDeposit}>Deposit {depositAmount}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(Number(e.target.value))}
            placeholder="Enter ammount"
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        <div>
          <span>Pay back {data.loan}</span>
          <button onClick={handlePayLoan}>Pay loan</button>
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;