import { createSlice } from "@reduxjs/toolkit";
import { createAccountAction, getSingleAccountAction } from "./actions";

const initialState = {
  account: null,
  accounts: [],
  error: null,
  loading: false,
  success: false,
  isUpdated: false,
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Create
    builder.addCase(createAccountAction.pending, (state, action) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(createAccountAction.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.account = action.payload?.data;
    });
    builder.addCase(createAccountAction.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.account = null;
      state.error = action.payload;
    });
    // Get Single Account Details
    builder.addCase(getSingleAccountAction.pending, (state, action) => {
      state.loading = true;
      state.success = false;
    });
    builder.addCase(getSingleAccountAction.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.account = action.payload?.data;
    });
    builder.addCase(getSingleAccountAction.rejected, (state, action) => {
      state.loading = false;
      state.success = false;
      state.account = null;
      state.error = action.payload;
    });
  },
});

const accountsReducer = accountsSlice.reducer;

export default accountsReducer;
