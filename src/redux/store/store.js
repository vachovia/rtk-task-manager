import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./../slice/users/usersSlice";
import accountsReducer from "./../slice/accounts/accountsSlice";

const store = configureStore({
    reducer:{
        users: usersReducer,
        accounts: accountsReducer
    }
});

export default store;