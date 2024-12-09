import { createSlice } from "@reduxjs/toolkit";
import { addTransactionAction, addTransactionEndedAction } from "./actions";

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
      };
    },
  },
  extraReducers: (builder) => {
    // Add
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
    builder.addCase(addTransactionEndedAction.fulfilled, (state, action) => {
      state.isAdded = false;
    });
  },
});

const transactionsReducer = transactionsSlice.reducer;

export const { addTransactionEnded } = transactionsSlice.actions;

export default transactionsReducer;
