import { createSlice } from "@reduxjs/toolkit";
import { addTransactionAction, updateTransactionAction, getSingleTransactionAction, addTransactionEndedAction } from "./actions";

const initialState = {
  transaction: null,
  transactions: [],
  error: null,
  loading: false,
  isAdded: false,
  isUpdated: false,
};

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransactionEnded: (state, action) => {
      return {
        ...state,
        isAdded: false,
        isUpdated: false
      };
    },
  },
  extraReducers: (builder) => {
    // Create
    builder.addCase(addTransactionAction.pending, (state, action) => {
      state.loading = true;
      state.isAdded = false;
    });
    builder.addCase(addTransactionAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isAdded = true;
      state.transaction = action.payload?.data;
    });
    builder.addCase(addTransactionAction.rejected, (state, action) => {
      state.loading = false;
      state.isAdded = false;
      state.transaction = null;
      state.error = action.payload;
    });
    // Update
    builder.addCase(updateTransactionAction.pending, (state, action) => {
      state.loading = true;
      state.isAdded = false;
      state.isUpdated = false;
    });
    builder.addCase(updateTransactionAction.fulfilled, (state, action) => {
      state.loading = false;
      state.isUpdated = true;
      state.transaction = action.payload?.data;
    });
    builder.addCase(updateTransactionAction.rejected, (state, action) => {
      state.loading = false;
      state.isAdded = false;
      state.isUpdated = false;
      state.transaction = null;
      state.error = action.payload;
    });
    // Get Single Transaction
    builder.addCase(getSingleTransactionAction.pending, (state, action) => {
      state.loading = true;
      state.isAdded = false;
      state.isUpdated = false;
    });
    builder.addCase(getSingleTransactionAction.fulfilled, (state, action) => {
      state.loading = false;
      state.transaction = action.payload?.data;
    });
    builder.addCase(getSingleTransactionAction.rejected, (state, action) => {
      state.loading = false;
      state.isAdded = false;
      state.isUpdated = false;
      state.transaction = null;
      state.error = action.payload;
    });
    // Navigation Ended
    builder.addCase(addTransactionEndedAction.fulfilled, (state, action) => {
      state.isAdded = false;
      state.isUpdated = false;
    });
  },
});

const transactionsReducer = transactionsSlice.reducer;

export const { addTransactionEnded } = transactionsSlice.actions;

export default transactionsReducer;
