import { createSlice } from "@reduxjs/toolkit";
import {
  createAccountAction,
  updateAccountAction,
  getSingleAccountAction,
} from "./actions";

const initialState = {
  account: null,
  accounts: [],
  error: null,
  loading: false,
  isAdded: false,
  isUpdated: false,
};

const accountsSlice = createSlice({
  name: "accounts",
  initialState,
  reducers: {
    updateAccountEnded: (state, action) => {
      return {
        ...state,
        isUpdated: false,
      };
    },
  },
  extraReducers: (builder) => {
    // Create
    builder.addCase(createAccountAction.pending, (state, action) => {
      state.loading = true;
      state.isAdded = false;
      state.isUpdated = false;
    });
    builder.addCase(createAccountAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isAdded = true;
      state.isUpdated = false;
      state.account = action.payload?.data;
    });
    builder.addCase(createAccountAction.rejected, (state, action) => {
      state.loading = false;
      state.isAdded = false;
      state.isUpdated = false;
      state.account = null;
      state.error = action.payload;
    });
    // Update
    builder.addCase(updateAccountAction.pending, (state, action) => {
      state.loading = true;
      state.isUpdated = false;
    });
    builder.addCase(updateAccountAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isUpdated = true;
      state.account = action.payload?.data;
    });
    builder.addCase(updateAccountAction.rejected, (state, action) => {
      state.loading = false;
      state.isUpdated = false;
      state.account = null;
      state.error = action.payload;
    });
    // Get Single Account Details
    builder.addCase(getSingleAccountAction.pending, (state, action) => {
      state.loading = true;
      state.isAdded = false;
      state.isUpdated = false;
    });
    builder.addCase(getSingleAccountAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isAdded = false;
      state.isUpdated = false;
      state.account = action.payload?.data;
    });
    builder.addCase(getSingleAccountAction.rejected, (state, action) => {
      state.loading = false;
      state.isAdded = false;
      state.isUpdated = false;
      state.account = null;
      state.error = action.payload;
    });
  },
});

const accountsReducer = accountsSlice.reducer;

export const { updateAccountEnded } = accountsSlice.actions;

export default accountsReducer;
