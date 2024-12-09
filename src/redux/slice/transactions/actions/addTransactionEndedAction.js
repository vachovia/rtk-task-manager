import { createAsyncThunk } from "@reduxjs/toolkit";

const addTransactionEndedAction = createAsyncThunk("transactions/addTransactionEnded", () => {  
  return null;
});

export default addTransactionEndedAction;
