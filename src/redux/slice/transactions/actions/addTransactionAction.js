import axios from "axios";
import baseURL from "../../../../utils/baseURL";
import { createAsyncThunk } from "@reduxjs/toolkit";

const addTransactionAction = createAsyncThunk(
  "transactions/add",
  async (payload, { rejectWithValue, getState, dispatch }) => {
    try {
      const url = `${baseURL}/transactions`;
      const state = getState();
      const token = state?.users?.userAuth?.userInfo?.token;

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      const { account, name, transactionType, amount, category, notes } = payload;
      
      const body = {
        account,
        name,
        transactionType,
        amount,
        category,
        notes,
      };

      const res = await axios.post(url, body, config);
      return res.data;
    } catch (error) {
      console.log(error?.response?.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export default addTransactionAction;
