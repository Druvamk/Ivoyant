import { createSlice } from "@reduxjs/toolkit";
import { intialStateProps } from "../../type";

const intialStateAccount: intialStateProps = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountSlice = createSlice({
  name: "account",
  initialState: intialStateAccount,
  reducers: {
    deposite(state, action) {
      state.balance += Number(action.payload);
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan(state, action) {
      state.loan = action.payload.loan;
      state.loanPurpose = action.payload.loanPurpose;
    },
    payload(state) {
      state.loan = 0;
      state.loanPurpose = "";
      state.balance -= state.loan;
    },
  },
});
export default accountSlice.reducer;
export const { deposite, withdraw, requestLoan, payload } =
  accountSlice.actions;
