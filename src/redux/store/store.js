import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./../slice/users/usersSlice";
import accountsReducer from "./../slice/accounts/accountsSlice";
import transactionsReducer from "./../slice/transactions/transactionsSlice";

const store = configureStore({
  reducer: {
    users: usersReducer,
    accounts: accountsReducer,
    transactions: transactionsReducer,
  },
});

export default store;
