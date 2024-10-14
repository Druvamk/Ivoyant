import { createSlice } from "@reduxjs/toolkit";
import { intialStateCustomerProps } from "../../type";
const intialStateCustomer: intialStateCustomerProps = {
  fullName: "",
  nationalId: "",
  createAt: "",
};

const customerSlice = createSlice({
  name: "customer",
  initialState: intialStateCustomer,
  reducers: {
    createCustomer(state, action) {
      state.fullName = action.payload.fullName;
      state.nationalId = action.payload.nationalId;
      state.createAt = action.payload.createAt;
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});
export default customerSlice.reducer;
export const { createCustomer, updateName } = customerSlice.actions;
